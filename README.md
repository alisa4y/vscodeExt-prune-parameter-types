# prune-parameter-types README

This extension makes the typescript functions to be more reusable. It examines the function parameters

In scenarios where a function requires a large type, resembling a polymorphic type, but only needs to check certain fields.

## Features

- **Parameter Analysis:** Examine function parameters.
- **Use Case Scenarios:** Useful for functions that require complex types but only need to check specific fields.

## How it Works:

This extension simplifies the process of examining function parameters, especially in cases where functions require large types but only need to verify certain fields. It uses typescript parser to detect access or function call to the parameter name then create Pick type as Parameter new type.

## Running

In command pallet type:

`prune type`

**Enjoy!**
