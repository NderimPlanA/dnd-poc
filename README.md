# DnD Poc

- each card should have a `width` prop
- cards can have 3 different widths: 25, 33, 50 percent
- cards will fill a whole row when possible (eg 3 33% cards will fill 1 row)


## what we need to do in the real codebase
- FE:
  - merge and sort charts and cards based on the order prop before feeding to the DNDContext
- BE: 
  - migrate the order prop to be consecutive between cards and chars
  - no need to order charts and cards in the BE based on the order prop (if it is being done already)
