

// calculateTriangleArea(base, height)
// calculateCircleArea(radius)
function calculateRectangleArea(length, width){
  let undefinedRA;
  if (length < 0 || width < 0){
    return undefinedRA
  }
  let rectArea = length * width;
  return rectArea;
}

function calculateTriangleArea(base, height){
  let undefinedTA;
  if (base < 0 || height < 0){
    return undefinedTA
  }
  let triArea = (base * height) / 2;
  return triArea;
}

function calculateCircleArea(radius){
  let undefinedCA;
  if (radius < 0){
    return undefinedCA;
  }
  let cirArea = Math.PI * Math.pow(radius, 2)
  return cirArea;
}




