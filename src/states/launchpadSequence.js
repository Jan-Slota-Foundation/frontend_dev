import { reactive } from 'vue'

export const lpSequence = reactive({
  currentOctave: 4,
  numberOfItems: 0,
  array: [
    {
      name: 'START',
      id: -1
    }
  ]
})
