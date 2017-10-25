# Installation

```
npm install -g eth-contract-address
```

# Usage

```
eth-contract-address ADDRESS [NONCE]
```

The address may or may not be prefixed with `0x`.  The nonce is optional. If not given, it will
default to 0.

# Examples


```
> eth-contract-address 0x7fbc03790d0cb03acb12f4499dfb99918c35be07
0x5d833f4d3dcb1ad6f644d7449c2dde3c698c2630

> eth-contract-address 0x7fbc03790d0cb03acb12f4499dfb99918c35be07 1
0xa97db18f1f389c31e26e82c70ed5e568f6f40473
```

The following usages are equivalent:

```
eth-contract-address 0x7fbc03790d0cb03acb12f4499dfb99918c35be07
eth-contract-address 7fbc03790d0cb03acb12f4499dfb99918c35be07
eth-contract-address 0x7fbc03790d0cb03acb12f4499dfb99918c35be07 0
eth-contract-address 7fbc03790d0cb03acb12f4499dfb99918c35be07 0
```
