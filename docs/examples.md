# w3ag examples

Web3 introduces unique accessibility barriers that traditional WCAG guidelines don't address:

## Example 1

```text
Principles (4)
  └── Guidelines (16)
        └── Success Criteria (50+)
              └── Techniques & Patterns
```

## Example 2

```text
https://modelcontextprotocol.name/mcp/w3ag
```

## Example 3

```bash
curl -X POST https://modelcontextprotocol.name/mcp/w3ag \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"get_w3ag_overview","arguments":{}}}'
```

## Example 4

```bash
curl -X POST https://modelcontextprotocol.name/mcp/w3ag \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"get_guideline","arguments":{"topic":"wallet"}}}'
```

## Example 5

```bash
curl -X POST https://modelcontextprotocol.name/mcp/w3ag \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}'
```


Every snippet above is taken from the [repository documentation](https://github.com/nirholas/w3ag#readme).
