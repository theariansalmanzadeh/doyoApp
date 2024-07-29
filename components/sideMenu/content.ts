import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import MapIcon from "@mui/icons-material/Map";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HandymanIcon from "@mui/icons-material/Handyman";

export const bodyMenuItems = [
  { label: "Services", icon: HandymanIcon, link: "services" },
  { label: "Taskers", icon: CurrencyExchangeIcon },
  { label: "Addresses", icon: MapIcon },
  { label: "Tokenomics", icon: AccountBalanceWalletIcon, link: "tokenominc" },
  { label: "Support", icon: SupportAgentIcon },
  { label: "Become a Tasker", icon: PersonOutlineIcon, link: "tasker-form" },
  { label: "Terms", icon: ReceiptLongIcon },
  { label: "Logout", icon: ExitToAppIcon },
];
