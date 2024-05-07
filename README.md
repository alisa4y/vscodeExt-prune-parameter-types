# prune-parameter-types README

This extension makes the typescript functions to be more reusable. It examines the function parameters.

In scenarios where a function requires a large type, resembling a polymorphic or union type, but only needs to check certain fields.

## Benfits

- **Better understanding of function:** Figuring exactly which fields is being used you become more aware of how function works.
- **More Reusable:** Useful for functions that require complex types but only need to check specific fields.
- **Less bugs:** If you are using `any` or `unknown` or force casting to use such functions, there is a high chance for a bug.

## How it Works:

This extension simplifies the process of examining function parameters, especially in cases where functions require large types but only need to verify certain fields. It uses typescript parser to detect access or function call to the parameter name then create Pick type as Parameter new type.

### Usage

Put cursor on Function name you want its parameters to get pruned.

Then in command pallet type:
`prune type`

**Enjoy!**
