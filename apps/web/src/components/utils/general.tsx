export const inputHandler = (
  event: React.ChangeEvent<HTMLInputElement>,
  updateDestination: any
) => {
  const enteredDestination = event.target.value;
  updateDestination(enteredDestination);
  console.log(enteredDestination);
};
