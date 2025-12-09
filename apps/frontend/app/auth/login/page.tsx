// app/page.tsx - Main Login/Register Page
'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Lock, User, Mail, Phone, MapPin, Building, 
  Shield, Globe, Users, CheckCircle,
  Eye, EyeOff, ArrowRight
} from 'lucide-react'
import { toast, Toaster } from 'react-hot-toast'
import { useAuthContext } from '../../../context/AuthContext'
import { register } from '../../../services/auth.service'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phoneNumber: '',
    role: 'property_owner' as 'property_owner' | 'government_official',
    department: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { signIn } = useAuthContext()
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number; speed: number }>>([])

  // Initialize floating particles
  useEffect(() => {
    const particlesArray = Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 20,
      speed: Math.random() * 0.5 + 0.2
    }))
    setParticles(particlesArray)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Validation
    if (isLogin) {
      if (!formData.email || !formData.password) {
        toast.error('Please fill in all fields')
        setIsLoading(false)
        return
      }
    } else {
      if (!formData.email || !formData.password || !formData.confirmPassword || !formData.fullName) {
        toast.error('Please fill in all required fields')
        setIsLoading(false)
        return
      }
      if (formData.password !== formData.confirmPassword) {
        toast.error('Passwords do not match')
        setIsLoading(false)
        return
      }
      if (formData.password.length < 8) {
        toast.error('Password must be at least 8 characters')
        setIsLoading(false)
        return
      }
    }

    try {
      if (isLogin) {
        await signIn({
          email: formData.email,
          password: formData.password,
        })

        toast.success('Welcome back! Redirecting...')
        router.push('/dashboard')
      } else {
        await register({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
          phoneNumber: formData.phoneNumber || undefined,
          role: formData.role,
          department: formData.department || undefined,
        })

        toast.success('Account created successfully! Please sign in to continue.')
        setIsLogin(true)
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Something went wrong'
      toast.error(message)
    } finally {
      setIsLoading(false)
    }
  }

  const stats = [
    { label: 'Properties Registered', value: '2,847', icon: Building },
    { label: 'Government Partners', value: '42', icon: Shield },
    { label: 'Cities Covered', value: '18', icon: Globe },
    { label: 'Active Users', value: '5,231', icon: Users }
  ]

  const teamMembers = [
    { name: 'Hodan Ibrahim Osman', role: 'Technical Lead' },
    { name: 'Kawther Hassan Mohamed', role: 'Frontend Developer' },
    { name: 'Suleiman Hussein', role: 'Backend Developer' },
    { name: 'Muscab Ahmed Mohamuud', role: 'Frontend Developer' },
    { name: 'Ahmed Ibrahim Hefow', role: 'DevOps Engineer' }
  ]

  const features = [
    'Secure digital property registration',
    'Real-time application tracking',
    'Government verification system',
    'Digital certificate generation',
    'Multi-owner support',
    'Mobile-friendly interface'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden relative">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Gradient mesh */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(at 40% 20%, rgba(56, 189, 248, 0.3) 0px, transparent 50%),
              radial-gradient(at 80% 0%, rgba(168, 85, 247, 0.3) 0px, transparent 50%),
              radial-gradient(at 0% 50%, rgba(236, 72, 153, 0.3) 0px, transparent 50%),
              radial-gradient(at 80% 50%, rgba(34, 197, 94, 0.3) 0px, transparent 50%),
              radial-gradient(at 0% 100%, rgba(251, 191, 36, 0.3) 0px, transparent 50%),
              radial-gradient(at 80% 100%, rgba(59, 130, 246, 0.3) 0px, transparent 50%)
            `
          }}
        />

        {/* Floating particles */}
        {particles.map((particle, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              filter: 'blur(20px)',
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 20 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10">
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: '#1f2937',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
            },
          }}
        />

        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-12"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 blur-xl opacity-70" />
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Property Registry
                </h1>
                <p className="text-sm text-gray-400">SDG6 - Sustainable Cities</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">Team SDG6</p>
              <p className="text-sm font-medium text-white">Government Certified</p>
            </div>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left side - Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Hero section */}
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    Digital Property
                    <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Registration System
                    </span>
                  </h2>
                  <p className="text-lg text-gray-300 max-w-2xl">
                    Transforming property registration with secure, transparent, and efficient digital solutions.
                    Join the future of urban development.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <stat.icon className="w-4 h-4 text-cyan-400" />
                        <p className="text-sm text-gray-400">{stat.label}</p>
                      </div>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Why Choose Us</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Team */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Our Team</h3>
                  <div className="flex flex-wrap gap-2">
                    {teamMembers.map((member, index) => (
                      <motion.div
                        key={member.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="px-3 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/5 rounded-lg"
                      >
                        <p className="text-sm font-medium text-white">{member.name}</p>
                        <p className="text-xs text-cyan-400">{member.role}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* SDG Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Supporting SDG 11</p>
                      <p className="text-sm text-green-400">Sustainable Cities & Communities</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right side - Auth Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30" />
                <div className="relative bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
                  {/* Toggle */}
                  <div className="flex mb-8 p-1 bg-gray-800/50 rounded-xl">
                    <button
                      onClick={() => setIsLogin(true)}
                      className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-300 ${
                        isLogin
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => setIsLogin(false)}
                      className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-300 ${
                        !isLogin
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      Register
                    </button>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <AnimatePresence mode="wait">
                      {isLogin ? (
                        <motion.div
                          key="login"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="space-y-6"
                        >
                          {/* Email */}
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Email</label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                                placeholder="Enter your email"
                                required
                              />
                            </div>
                          </div>

                          {/* Password */}
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Password</label>
                            <div className="relative">
                              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                              <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="w-full pl-10 pr-12 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                                placeholder="Enter your password"
                                required
                              />
                              <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white"
                              >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                              </button>
                            </div>
                          </div>

                          {/* Remember & Forgot */}
                          <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 text-sm text-gray-300">
                              <input type="checkbox" className="rounded border-gray-600 bg-gray-700" />
                              Remember me
                            </label>
                            <button type="button" className="text-sm text-cyan-400 hover:text-cyan-300">
                              Forgot password?
                            </button>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="register"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="space-y-6"
                        >
                          {/* Full Name */}
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Full Name</label>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                              <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                                placeholder="Enter your full name"
                                required
                              />
                            </div>
                          </div>

                          {/* Email */}
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Email</label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                                placeholder="Enter your email"
                                required
                              />
                            </div>
                          </div>

                          {/* Phone */}
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Phone Number</label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                              <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                                placeholder="Enter your phone number"
                              />
                            </div>
                          </div>

                          {/* Role Selection */}
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">I am a</label>
                            <div className="grid grid-cols-2 gap-3">
                              <button
                                type="button"
                                onClick={() => setFormData(prev => ({ ...prev, role: 'property_owner' }))}
                                className={`py-3 px-4 rounded-xl border transition-all duration-300 flex items-center justify-center gap-2 ${
                                  formData.role === 'property_owner'
                                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-500/50 text-white'
                                    : 'border-gray-700 text-gray-400 hover:border-cyan-500/30 hover:text-white'
                                }`}
                              >
                                <User size={16} />
                                Property Owner
                              </button>
                              <button
                                type="button"
                                onClick={() => setFormData(prev => ({ ...prev, role: 'government_official' }))}
                                className={`py-3 px-4 rounded-xl border transition-all duration-300 flex items-center justify-center gap-2 ${
                                  formData.role === 'government_official'
                                    ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/50 text-white'
                                    : 'border-gray-700 text-gray-400 hover:border-purple-500/30 hover:text-white'
                                }`}
                              >
                                <Shield size={16} />
                                Government Official
                              </button>
                            </div>
                          </div>

                          {/* Department (for officials) */}
                          {formData.role === 'government_official' && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className="space-y-2"
                            >
                              <label className="text-sm font-medium text-gray-300">Department</label>
                              <div className="relative">
                                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                                <input
                                  type="text"
                                  name="department"
                                  value={formData.department}
                                  onChange={handleInputChange}
                                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                  placeholder="Enter your department"
                                />
                              </div>
                            </motion.div>
                          )}

                          {/* Password */}
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Password</label>
                            <div className="relative">
                              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                              <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="w-full pl-10 pr-12 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                                placeholder="Create a password"
                                required
                              />
                              <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white"
                              >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                              </button>
                            </div>
                          </div>

                          {/* Confirm Password */}
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Confirm Password</label>
                            <div className="relative">
                              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                              <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                className="w-full pl-10 pr-12 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                                placeholder="Confirm your password"
                                required
                              />
                              <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white"
                              >
                                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isLoading}
                      className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                        isLogin
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600'
                          : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                      } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          {isLogin ? 'Signing in...' : 'Creating account...'}
                        </>
                      ) : (
                        <>
                          {isLogin ? 'Sign In to Dashboard' : 'Create Account'}
                          <ArrowRight size={20} />
                        </>
                      )}
                    </motion.button>

                    {/* Terms */}
                    {!isLogin && (
                      <p className="text-center text-xs text-gray-500">
                        By registering, you agree to our{' '}
                        <button type="button" className="text-cyan-400 hover:text-cyan-300">
                          Terms of Service
                        </button>{' '}
                        and{' '}
                        <button type="button" className="text-cyan-400 hover:text-cyan-300">
                          Privacy Policy
                        </button>
                      </p>
                    )}
                  </form>

                  {/* Demo Credentials */}
                  <div className="mt-8 pt-6 border-t border-gray-800">
                    <p className="text-sm text-gray-400 text-center mb-3">Demo Credentials</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-gray-800/50 rounded-lg p-3">
                        <p className="font-medium text-cyan-400">Property Owner</p>
                        <p className="text-gray-400">owner@example.com</p>
                        <p className="text-gray-400">password: demo123</p>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-3">
                        <p className="font-medium text-purple-400">Government Official</p>
                        <p className="text-gray-400">official@example.com</p>
                        <p className="text-gray-400">password: demo123</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Property Registration System - SDG6. All rights reserved.
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Supporting Sustainable Development Goal 11: Sustainable Cities and Communities
            </p>
          </motion.footer>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        /* Smooth transitions */
        * {
          transition: background-color 0.3s ease, border-color 0.3s ease;
        }

        /* Hide scrollbar but keep functionality */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #8b5cf6);
          border-radius: 4px;
        }

        /* Selection color */
        ::selection {
          background: rgba(139, 92, 246, 0.3);
          color: white;
        }
      `}</style>
    </div>
  )
}