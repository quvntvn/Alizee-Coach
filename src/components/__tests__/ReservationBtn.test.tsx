import { render, screen } from '@testing-library/react'
import ReservationBtn from '../ReversationBtn'

describe('ReservationBtn', () => {
  it('renders a link to /contact', () => {
    render(<ReservationBtn />)
    const link = screen.getByRole('link', { name: /réserver une séance avec alizé/i })
    expect(link).toHaveAttribute('href', '/contact')
  })
})
