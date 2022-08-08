import React from 'react'
import axios from 'axios'
import { waitFor, screen, fireEvent } from '@testing-library/react'
import { BLOG_API } from '../../constants'
import { renderWithRouter } from '../../testUtils'
import Post from './Post'

jest.mock('axios')

describe('Post', () => {
  test('should display in read-only mode as default ', async () => {
    // mock response to return the fake post
    const post = {
      _id: '1',
      username: 'thaoho',
      title: 'Creative Writing',
      content: [
        {
          type: 'h1',
          children: [
            {
              text: 'Creative Writing',
            },
          ],
        },
        {
          type: 'paragraph',
          children: [
            {
              text: 'Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day.',
            },
          ],
        },
      ],
      createdAt: '2022-05-02T09:19:31.261Z',
      updatedAt: '2022-05-28T15:28:00.902Z',
      __v: 1,
    }

    axios.get.mockResolvedValueOnce({ data: post })
    // render with router
    const routerOptions = {
      routePath: '/posts/:id',
      initialEntries: ['/posts/1'],
    }
    renderWithRouter(<Post />, routerOptions)
    // expect edit button display
    expect(screen.getByText('Edit', { selector: 'button' })).toBeInTheDocument()
    // expect header and content to be display as they received
    await waitFor(() =>
      expect(screen.getByText(post.title)).toBeInTheDocument(),
    )
    // expect they are in read-only mode
    expect(
      screen.getByText(post.content[1].children[0].text),
    ).toBeInTheDocument()
  })

  test('should able to create a new post', () => {
    // render with router
    const routerOptions = {
      routePath: '/posts/create',
      initialEntries: ['/posts/create'],
    }
    renderWithRouter(<Post />, routerOptions)

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: `New post \n new content` },
    })

    fireEvent.click(screen.getByText('publish'))

    const expectedContent = {
      content: [
        {
          type: 'h1',
          children: [
            {
              text: 'New Title',
            },
          ],
        },
        {
          type: 'paragraph',
          children: [
            {
              text: 'New content',
            },
          ],
        },
      ],
    }

    expect(axios.post).toHaveBeenCalledWith(`${BLOG_API}/posts/add`, {
      title: 'New Title',
      content: expectedContent,
      username: 'thaoho',
    })
  })

  test('should able to edit an existing post', () => {})
})
