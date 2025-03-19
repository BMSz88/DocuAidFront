import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Login from '../login'

describe('Login Component', () => {
    it('renders login form', () => {
        render(<Login />)
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
    })

    it('shows validation errors for empty fields', async () => {
        render(<Login />)
        const submitButton = screen.getByRole('button', { name: /login/i })
        fireEvent.click(submitButton)

        await waitFor(() => {
            expect(screen.getByText(/email is required/i)).toBeInTheDocument()
            expect(screen.getByText(/password is required/i)).toBeInTheDocument()
        })
    })

    it('handles successful login', async () => {
        const mockNavigate = vi.fn()
        vi.mock('react-router-dom', () => ({
            useNavigate: () => mockNavigate
        }))

        render(<Login />)

        fireEvent.change(screen.getByLabelText(/email/i), {
            target: { value: 'test@example.com' }
        })
        fireEvent.change(screen.getByLabelText(/password/i), {
            target: { value: 'password123' }
        })

        fireEvent.click(screen.getByRole('button', { name: /login/i }))

        await waitFor(() => {
            expect(mockNavigate).toHaveBeenCalledWith('/dashboard')
        })
    })
}) 