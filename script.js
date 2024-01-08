//your JS code here. If required.
function changeColor() {
  const blockId = document.getElementById('block_id').value;
  const color = document.getElementById('colour_id').value;
  const blockElement = document.getElementById(blockId);

  if (blockElement) {
    // Reset all grid item backgrounds to transparent
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
      item.style.backgroundColor = 'transparent';
    });

    // Set the background color of the selected block
    blockElement.style.backgroundColor = color;
  } else {
    alert('Invalid Block ID');
  }
}
function resetColors() {
  // Reset all grid item backgrounds to transparent
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => {
    item.style.backgroundColor = 'transparent';
  });
}