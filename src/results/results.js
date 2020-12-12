// this is a custom results page

import { render } from '@testing-library/react'

const results = obj => {
  const [firstInput, secondInput, thirdInput] = obj.userInput
  const firstAnswer = (firstInput, thirdInput) => {
    if (firstInput === 0) {
      switch (thirdInput) {
        case 0:
          return 'Nippy'
        case 1:
          return 'Figgy'
        case 2:
          return 'Muffdust'
        case 3:
          return 'Hooker'
        default:
          return 'oops'
      }
    }
    if (firstInput === 1) {
      switch (thirdInput) {
        case 0:
          return 'Flaptoot'
        case 1:
          return 'Snowball'
        case 2:
          return 'Smooshy'
        case 3:
          return 'Belchie'
        default:
          return 'oops'
      }
    }
    if (firstInput === 2) {
      switch (thirdInput) {
        case 0:
          return 'Schnocker'
        case 1:
          return 'Cocksmack'
        case 2:
          return 'Bimbo'
        case 3:
          return 'Honky'
        default:
          return 'oops'
      }
    }
  }
  const secondAnswer = (firstInput, secondInput) => {
    if (secondInput === 0) {
      switch (firstInput) {
        case 0:
          return 'The Motherfuckin'
        case 1:
          return 'The Slutty'
        case 2:
          return 'The Loose-Lipped'
        default:
          return 'oops'
      }
    }
    if (secondInput === 1) {
      switch (firstInput) {
        case 0:
          return 'The Horny'
        case 1:
          return 'The Shitfaced'
        case 2:
          return 'The Red-Assed'
        default:
          return 'oops'
      }
    }
    if (secondInput === 2) {
      switch (firstInput) {
        case 0:
          return 'Schnocker'
        case 1:
          return 'Cocksmack'
        case 2:
          return 'Bimbo'
        default:
          return 'oops'
      }
    }
    if (secondInput === 3) {
      switch (firstInput) {
        case 0:
          return 'The Bootie Shakin'
        case 1:
          return 'The Big Boobed'
        case 2:
          return 'Honky'
        default:
          return 'oops'
      }
    }
  }
  const thirdAnswer = (firstInput, secondInput) => {
    if (firstInput === 0) {
      switch (secondInput) {
        case 0:
          return 'Crack Whore'
        case 1:
          return 'Pecker Wrecker'
        case 2:
          return 'Asshole'
        case 3:
          return 'Dime Piece'
        default:
          return 'oops'
      }
    }
    if (firstInput === 1) {
      switch (secondInput) {
        case 0:
          return 'Fuck Boi'
        case 1:
          return 'Dumpster Slut'
        case 2:
          return 'Wigger'
        case 3:
          return 'Welfare Mom'
        default:
          return 'oops'
      }
    }
    if (firstInput === 2) {
      switch (secondInput) {
        case 0:
          return 'Meth Head'
        case 1:
          return 'Man Slammer'
        case 2:
          return 'Douche Canoe'
        case 3:
          return 'Wiener Whacker'
        default:
          return 'oops'
      }
    }
  }
  render(
    <div>
      <h1>Your slutty elf name is:</h1>
      <br />
      <p>
        {firstAnswer(firstInput, thirdInput)}{' '}
        {secondAnswer(firstInput, secondInput)}{' '}
        {thirdAnswer(firstInput, secondInput)}
      </p>
    </div>
  )
}

export default results
