// this is a custom results page

import { render } from '@testing-library/react'

const results = obj => {
  const [firstInput, secondInput, thirdInput] = obj.userInput
  console.log(firstInput)
  console.log(secondInput)
  console.log(thirdInput)
  const firstAnswer = (firstInput, thirdInput) => {
    if (firstInput === 1) {
      switch (thirdInput) {
        case 1:
          return 'Nippy'
        case 2:
          return 'Figgy'
        case 3:
          return 'Muffdust'
        case 4:
          return 'Hooker'
        default:
          return 'oops'
      }
    }
    if (firstInput === 2) {
      switch (thirdInput) {
        case 1:
          return 'Flaptoot'
        case 2:
          return 'Snowball'
        case 3:
          return 'Smooshy'
        case 4:
          return 'Belchie'
        default:
          return 'oops'
      }
    }
    if (firstInput === 3) {
      switch (thirdInput) {
        case 1:
          return 'Schnocker'
        case 2:
          return 'Cocksmack'
        case 3:
          return 'Bimbo'
        case 4:
          return 'Honky'
        default:
          return 'oops'
      }
    }
  }
  const secondAnswer = (firstInput, secondInput) => {
    if (secondInput === 1) {
      switch (firstInput) {
        case 1:
          return 'The Motherfuckin'
        case 2:
          return 'The Slutty'
        case 3:
          return 'The Loose-Lipped'
        default:
          return 'oops'
      }
    }
    if (secondInput === 2) {
      switch (firstInput) {
        case 1:
          return 'The Horny'
        case 2:
          return 'The Shitfaced'
        case 3:
          return 'The Red-Assed'
        default:
          return 'oops'
      }
    }
    if (secondInput === 3) {
      switch (firstInput) {
        case 1:
          return 'Schnocker'
        case 2:
          return 'Cocksmack'
        case 3:
          return 'Bimbo'
        default:
          return 'oops'
      }
    }
    if (secondInput === 4) {
      switch (firstInput) {
        case 1:
          return 'The Bootie Shakin'
        case 2:
          return 'The Big Boobed'
        case 3:
          return 'Honky'
        default:
          return 'oops'
      }
    }
  }
  const thirdAnswer = (firstInput, secondInput) => {
    if (firstInput === 1) {
      switch (secondInput) {
        case 1:
          return 'Crack Whore'
        case 2:
          return 'Pecker Wrecker'
        case 3:
          return 'Asshole'
        case 4:
          return 'Dime Piece'
        default:
          return 'oops'
      }
    }
    if (firstInput === 2) {
      switch (secondInput) {
        case 1:
          return 'Fuck Boi'
        case 2:
          return 'Dumpster Slut'
        case 3:
          return 'Wigger'
        case 4:
          return 'Welfare Mom'
        default:
          return 'oops'
      }
    }
    if (firstInput === 3) {
      switch (secondInput) {
        case 1:
          return 'Meth Head'
        case 2:
          return 'Man Slammer'
        case 3:
          return 'Douche Canoe'
        case 4:
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
