# Frontend coding and testing exercise

This exercise contains a simple React application which contains a few basic tests. We would like you to:

1.  familiarise yourself with the application
2.  run the tests
3.  write the code to make the tests pass

Installation and running instructions are below. Documentation for the desired
behaviour is also below.

# Getting started

### Install dependencies

```
npm i
```

### Compile and run the development server

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

```
npm start
```

### Run tests

Launches the test runner in the interactive watch mode.

```
npm test
```

Press `a` to run all tests initially. The tests will be run each time a file change is saved.

# Desired Behaviour

The given component calculates the pricing for running a study on Prolific.

The component has three fields which accept user input and will be used in the calculation:

- reward - the total amount each participant will be paid for completing the
  study (in £)
- numberOfParticipants - the total number of participants who will take the study
- time - the time it takes for each participant to complete the study
  (in minutes)

The following constants are used in the calculation but are not user inputs:

- FEES_PERCENTAGE - our additional fees percentage, given as a fraction
  between 0-1. For example, a fee of 30% = 0.3.
- VAT_PERCENTAGE - the additional VAT percentage, given as a fraction
  between 0-1. For example, a VAT rate of 20% = 0.2. Note: VAT is only charged
  on our fees, not the total cost.

The component renders the following two calculated values, which are updated
automatically upon user input:

- totalCost - the total cost of the study, which can be assumed to be
  `reward * numberOfParticipants + our additional fees and VAT and rounded up to the nearest 1p.`
- rewardPerHour - how much the participant will earn per hour for this study,
  rounded up to the nearest 1p.

## Example inputs and outputs

```
Input                          Output
-----------------------        ------------------------
Reward = £1.00                 totalCost = £13.60
Number of Participants = 10    rewardPerHour = £6.00/hr
Time = 10 minutes
feesPercentage = 0.3
vatPercentage = 0.2


Input                          Output
-----------------------        ------------------------
Reward = £100                  totalCost = £72,500
Number of Participants = 500    rewardPerHour = £30/hr
Time = 200 minutes
feesPercentage = 0.4
vatPercentage = 0.125

Input                          Output
-----------------------        ------------------------
Reward = £2.38                 totalCost = £48.56
Number of Participants = 17    rewardPerHour = £4.33/hr
Time = 33 minutes
feesPercentage = 0.2
vatPercentage = 0
```
