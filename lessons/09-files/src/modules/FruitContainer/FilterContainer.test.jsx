import React from 'react'
import { render, waitForElementToBeRemoved } from '@testing-library/react'

import { FruitContainer } from './FruitContainer'

jest.mock('../../api/repository')

describe('FruitContainer', () => {
  it('shows loading message while fetching', async () => {
    const { getByText } = render(<FruitContainer />)

    expect(getByText(/Loading/i)).toBeInTheDocument()

    await waitForElementToBeRemoved(() => getByText(/Loading/i))
  })

  it('renders fetched fruit', async () => {
    const { getByText } = render(<FruitContainer />)

    await waitForElementToBeRemoved(() => getByText(/Loading/i))

    expect(getByText(/pineapple/i)).toBeInTheDocument()
  })
})
