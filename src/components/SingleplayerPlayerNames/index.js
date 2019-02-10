import React from 'react'
import _ from 'lodash'
import { Formik, Field } from 'formik'
import { Mutation } from 'react-apollo'
import MenuContainer from '../MenuContainer'
import Button from '../Button'
import initialValues from './lib/initialValues'
import createGameMutation from './lib/createGameMutation'
import styles from './index.module.css'

export default ({
  match: {
    params: {
      playersCount,
    },
  },
}) => (
  <MenuContainer>
    <Mutation mutation={createGameMutation}>
      {(createGame, { data }) => (
        <Formik
          initialValues={initialValues(playersCount)}
          onSubmit={async (variables) => {
            console.log('Form submitted with:', variables)
            createGame({ variables })
          }}
        >
          {({ values: { players }, handleSubmit, errors }) => (
            <form onSubmit={handleSubmit}>
              {_.map(players, ({ number }, index) => (
                <div key={index}>
                  <Field
                    name={`players.${index}.name`}
                    className={styles.field}
                    placeholder={`Player ${index + 1} name`}
                  />
                </div>
              ))}

              <Button component='button' type='submit'>
                Start game
              </Button>

              {JSON.stringify(data)}
            </form>
          )}
        </Formik>
      )}
    </Mutation>
  </MenuContainer>
)
