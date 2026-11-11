---
name: w3ag-audit
description: Audit a React or TypeScript web3 frontend for accessibility problems with the w3ag-audit CLI, then fix findings using the W3AG guidelines and techniques. Use when reviewing wallet, transaction-signing, address-display or DeFi UI for accessibility.
---

# W3AG audit

W3AG (Web3 Accessibility Guidelines) extends WCAG for wallets, addresses, signing and DeFi UIs. The `w3ag-audit` CLI (npm, version 0.1.0, no dependencies) scans source files with regex rules. It is a static heuristic, so confirm each finding by reading the code.

## Run

```bash
npx w3ag-audit ./src                 # a directory (scans .tsx .jsx .ts .js, skips node_modules .git dist build .next coverage)
npx w3ag-audit ./src/App.tsx         # one file
npx w3ag-audit ./src --json          # machine-readable output
npx w3ag-audit ./src --no-color      # plain text for logs
npx w3ag-audit --help
```

Exit codes: `0` no Level A violations, `1` Level A violations found, `2` error (bad path, permission). Level AA and AAA findings are reported but never change the exit code.

## Rules (ids as printed)

- Level A: `1.1.1-raw-address`, `1.1.1-hex-string`, `1.3.1-img-alt`, `1.3.1-input-label`, `2.1.1-div-onclick`, `2.1.1-keyboard`, `4.1.1-button-name`, `4.1.1-link-name`, `4.1.2-live-region`, `3.3.1-tx-type`.
- Level AA: `1.4.1-color-only`, `1.4.1-status-color`, `1.2.3-wei-amount`, `2.4.7-focus-visible`, `2.4.7-custom-focus`, `4.1.2-modal-aria`, `3.2.2-auto-tx`, `1.4.3-contrast`, `3.4.1-unlimited-approval`.
- Level AAA: `3.1.1-jargon`, `2.2.1-time-limit`.

Each violation prints file, line, criterion, the matching code and a suggested fix.

## Workflow

1. Run the audit with `--json`, group findings by file.
2. Fix Level A first. For raw addresses, chunk into 4-character groups with an `aria-label`, or use the reference `AddressDisplay` component in `components/AddressDisplay.tsx` (the repo also has `WalletModal`, `TransactionSummary`, `GasEstimator`, `TokenApprovalDialog`, `RiskWarning`, `NetworkSwitcher`, `TokenSelector`, `PriceChange`, `Timer`).
3. Look up the criterion in `guidelines/` (`perceivable/`, `operable/`, `understandable/`, `robust/`, indexed in `guidelines/INDEX.md`) and the how-to in `techniques/` (`address-display.md`, `gas-estimation.md`, `network-switching.md`, `token-approval.md`, `transaction-signing.md`, `wallet-connection.md`). `guides/react-wagmi.md` covers wagmi apps.
4. Re-run until exit code is 0, then review AA findings.

## Example CI step

```bash
npx w3ag-audit ./src --no-color   # fails the job when Level A violations exist
```

The tool cannot check real contrast, screen-reader output or focus order. Recommend manual testing with a screen reader for those.
