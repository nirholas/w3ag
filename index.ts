// W3AG root entry point.
//
// The components themselves live in ./components, which is the @w3ag/react
// package. This file re-exports them so `import { ... } from 'w3ag'` and a
// direct clone of this repository resolve to the same implementations.

export {
  AddressDisplay,
  TransactionSummary,
  WalletModal,
  RiskWarning,
  RiskMeter,
  VerificationBadge,
  TokenSelector,
  PriceChange,
  Timer,
  TokenApprovalDialog,
  NetworkSwitcher,
  COMMON_NETWORKS,
  GasEstimator,
  GasDisplay,
  GasWarning,
} from './components';

export type {
  Token,
  TokenInfo,
  SpenderInfo,
  TokenApprovalDialogProps,
  NetworkInfo,
  NetworkSwitcherProps,
  GasSpeed,
  GasPrice,
  GasEstimatorProps,
  GasDisplayProps,
  GasWarningProps,
} from './components';
