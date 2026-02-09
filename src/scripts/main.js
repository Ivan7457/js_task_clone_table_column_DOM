'use strict';

const rows = document.querySelectorAll('table tr');

rows.forEach((row) => {
  const cells = row.children;

  const positionCell = cells[1];

  const clonedCell = positionCell.cloneNode(true);

  row.insertBefore(clonedCell, cells[cells.length - 1]);
});
