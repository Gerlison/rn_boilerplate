const INITIAL_STATE = {};

function getKey(verb, noun) {
  let lowerVerb = verb.toLowerCase();
  let lowerNoun = noun.toLowerCase();

  return `${lowerVerb}${lowerNoun.charAt(0).toUpperCase() +
    lowerNoun.slice(1)}Loading`;
}

export default function reducer(state = INITIAL_STATE, action) {
  const { type } = action;
  const matches = /([A-Z]*)_([A-Z]*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

  if (!matches) return state;

  const [_, requestVerb, requestNoun, requestState] = matches;
  const requestName = getKey(requestVerb, requestNoun);

  return Object.assign({}, state, {
    [requestName]: requestState === "REQUEST"
  });
}
