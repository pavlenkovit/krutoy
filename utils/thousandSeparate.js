export default (n) => {
  return (n.toString()).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};
