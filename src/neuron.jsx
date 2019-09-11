const neuron = ({synapse = [], threshould = 1} = {}) => ({
  synapse, threshould
});

const synapse = ({weight = 0.1, value = 0}= {}) => ({
  weight, value
});

const shouldTrigger = ({threshould, synapse}) => {
  const sum = synapse.reduce(
    (amplitude, {weight, value}) => amplitude + (weight * value),0);
  return sum >= threshould;
}

const neuron1 = neuron({
  synapse:[
    synapse({value: -0.2}),
    synapse({weight: 0, value: 1}),
    synapse({weight: 0.5, value: 0.8})
  ],
  threshould: 0.3
});

const neuron2 = neuron({
  synapse:[
    synapse({value: -0.2}),
    synapse({weight: 0, value: 1}),
    synapse({weight: 0.5, value: 0.8})
  ],
  threshould: 0.5
})

console.log(shouldTrigger(neuron1)); //true que cambie a color verde
console.log(shouldTrigger(neuron2)); //false que siga con color rojo
