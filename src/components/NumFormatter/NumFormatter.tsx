
function NumFormatter(num : number ) {
  return  new Intl.NumberFormat("fa").format(num).replace(/٬/g, "," );
}

export default NumFormatter