import React from 'react'
import _ from 'lodash'
import { Formik, Field } from 'formik'
import MenuContainer from '../MenuContainer'
import initialValues from './lib/initialValues'

export default ({
  match: {
    params: {
      playersCount,
    },
  },
}) => (
  <MenuContainer>
    <Formik
      initialValues={initialValues(playersCount)}
    >
      {({ values: { players }, handleSubmit, errors }) => (
        <form onSubmit={handleSubmit}>
          {_.map(players, ({ number }, index) => (
            <div key={index}>
              <Field
                name={`players.${index}.name`}
                placeholder={`Player ${index + 1} name`}
              />
            </div>
          ))}
        </form>
      )}
    </Formik>
  </MenuContainer>
)
