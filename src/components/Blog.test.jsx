import { render, screen } from '@testing-library/react'
import Blog from './Blog'

test('renders blog', () => {
    const blog = {
        title: 'Example blog',
        author: 'Me',
        url: 'www.shouldnotappear.net',
        likes: 0,
        user: {
            name: 'joe'
        }
    }

    const loggedIn = {
        name: 'nacho'
    }

    render(<Blog blog={blog} loggedIn={loggedIn}/>)

    const element = screen.getByText('Example blog Me')

    expect(element).toBeDefined()

})

test('default blog renders with only title and author', () => {
    const blog = {
        title: 'Example blog',
        author: 'Me',
        url: 'www.shouldnotappear.net',
        likes: 0,
        user: {
            name: 'joe'
        }
    }

    const loggedIn = {
        name: 'nacho'
    }

    render(<Blog blog={blog} loggedIn={loggedIn}/>)

    const element = screen.getByText('Example blog Me')
    expect(element).toBeDefined()

    const url = screen.queryByText('www.shouldnotappear.net')
    expect(url).toBeNull()

    const likes = screen.queryByText('likes: 0')
    expect(likes).toBeNull()

})