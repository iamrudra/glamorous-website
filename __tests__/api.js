import React from 'react'
import renderer from 'react-test-renderer'
import {matcher, serializer} from 'jest-glamor-react'
import Api from '../pages/api'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

test('renders', () => {
  const component = renderer.create(<Api />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
