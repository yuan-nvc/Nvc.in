import { useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { supabase } from '../lib/supabase'
import { motion as m } from 'framer-motion'

const LoadingSpinner = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <m.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 1, 0.5]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="w-12 h-12 rounded-full border-2 border-[#89CFF0] border-t-transparent animate-spin"
    />
  </div>
)

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        setAuthenticated(!!session)
      } catch (error) {
        console.error('Auth error:', error)
        setAuthenticated(false)
      } finally {
        setLoading(false)
      }
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setAuthenticated(!!session)
      setLoading(false)
    })

    checkAuth()

    return () => {
      subscription?.unsubscribe()
    }
  }, [])

  if (loading) {
    return <LoadingSpinner />
  }

  if (!authenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired
}

export default ProtectedRoute
