// this is a custom results page

const results = obj => {
  const [firstInput, secondInput, thirdInput] = obj.userInput
  console.log(obj)
  const firstAnswer = firstInput => {
    switch (firstInput) {
      case 1:
        return 'Hillary'
      case 2:
        return 'Obama'
      case 3:
        return 'George Soros'
      case 4:
        return 'Hunter Biden'
      case 5:
        return `"The Blacks"`
      case 6:
        return 'Anderson Cooper'
      case 7:
        return 'The Deep State'
      case 8:
        return 'Nancy Pelosi'
      case 9:
        return 'Tom Hanks'
      case 10:
        return 'Bill Gates'
      case 11:
        return 'AOC'
      case 12:
        return `The "Lame Stream Media"`
      default:
        return 'oops'
    }
  }
  const secondAnswer = secondInput => {
    switch (secondInput) {
      case 1:
        return 'Bought Stock in Antifa'
      case 2:
        return 'Collected Toddler Faces'
      case 3:
        return 'Bankrolled Abortion Farms'
      case 4:
        return 'Face Swapped with Mike Pence'
      case 5:
        return `"Created COVID"`
      case 6:
        return 'Drank the Blood of a Bald Eagle'
      case 7:
        return 'Trained Crows to Unionize'
      case 8:
        return 'Will Harvest Your Trigger Finger'
      case 9:
        return 'Can Shapeshift into a Food Stamp'
      case 10:
        return 'Built a Jewish Space Laser'
      case 11:
        return `Used "Happy Holidays" as a Sex incantation`
      case 12:
        return 'Invented Anthem Kneeling'
      default:
        return 'oops'
    }
  }
  const thirdAnswer = thirdInput => {
    switch (thirdInput) {
      case 1:
        return 'While Wearing a Hijab'
      case 2:
        return 'in the Pantry of a Marxist Pizzeria'
      case 3:
        return 'to Keep the Whites Down'
      case 4:
        return 'While Getting Gay Married'
      case 5:
        return 'on a Socialist Dare'
      case 6:
        return 'for the Ghost of Hugo Chavez'
      case 7:
        return 'While Forcibly Vaccinating a Flag'
      case 8:
        return 'For the Child Prison Camps on the Moon'
      case 9:
        return 'to Keep the Lizard Overlords Happy'
      case 10:
        return `Because Everyone's a Secret Muslim`
      case 11:
        return 'in a Tan Suit Made by Mexicans'
      case 12:
        return 'While Living in a 5G Cell Tower'
      default:
        return 'oops'
    }
  }

  return(
    <div>
      <h1>Your shitty conspiracy theory is:</h1>
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
