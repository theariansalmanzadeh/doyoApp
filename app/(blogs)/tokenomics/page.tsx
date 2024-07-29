/* eslint-disable react/no-unescaped-entities */
import { Typography } from "@mui/material";
import React from "react";

const TokenomicsPage = () => {
  return (
    <div>
      <Typography lineHeight={2} variant="body1">
        <Typography lineHeight={2} variant="body1" paddingBottom="20px">
          Doyo Token Functionality In today's world, on-demand home services
          platforms have revolutionized the way we access and avail services.
          Doyo, an emerging online on-demand home services platform, has taken
          this concept to the next level by introducing its very own utility
          token. In this article, we delve into the functionality and technical
          capabilities of the Doyo token, exploring its use cases and the
          benefits it brings to users and the platform itself. Doyo Token as a
          Utility Token The Doyo token is designed to be a utility token that
          will circulate exclusively within the Doyo application. As a utility
          token, it serves a multitude of purposes, providing numerous benefits
          to both users and the platform. Let's take a closer look at some of
          the key use cases of the Doyo token.
        </Typography>
        <ul>
          <li>
            <p style={{ fontWeight: "bold" }}>
              {" "}
              1. Making Payments and Transfers{" "}
            </p>
            One of the primary purposes of the Doyo token is to facilitate
            seamless and efficient payments and transfers within the Doyo
            ecosystem. By utilizing the token, users can pay for services
            received or transfer funds to other users within the platform,
            eliminating the need for traditional banking systems or
            intermediaries. This not only simplifies the payment process but
            also reduces transaction costs and enhances overall user experience.
          </li>
          <li>
            <p style={{ fontWeight: "bold" }}>2. Incentivize Users</p>
            The Doyo token acts as a powerful tool for incentivize users to
            actively engage with the platform. By rewarding users with tokens
            for various activities such as completing tasks, providing feedback,
            or referring new users, Doyo encourages participation and loyalty.
            These incentives can be redeemed for discounted services, exclusive
            offers, or even converted into other digital assets, contributing to
            a vibrant and engaged user community.
          </li>
          <li>
            <p style={{ fontWeight: "bold" }}>3. Fundraising</p> Another notable
            use case of the Doyo token is its potential to facilitate
            fundraising activities. Doyo can leverage the token by offering it
            as part of initial coin offerings (ICOs) or token sales to raise
            funds for platform development, expansion, or to support specific
            initiatives. This approach enables Doyo to tap into a larger pool of
            potential investors and supporters, fostering growth and innovation.
          </li>
          <li>
            <p style={{ fontWeight: "bold" }}>4. Stakeholder Participation</p>{" "}
            The Doyo token also provides users with the opportunity to stake
            their tokens and actively participate in the platform's governance
            and decision-making processes. By staking tokens, users can earn
            additional rewards, voting rights, or even influence the direction
            of future platform developments. This mechanism enhances the
            decentralization and democratization of the Doyo ecosystem,
            empowering its stakeholders.
          </li>
          <li>
            <p style={{ fontWeight: "bold" }}>5. Airdrop to Users</p> To further
            incentivize and reward users, Doyo may periodically distribute
            airdrops of tokens to its active user base. Airdrops, which involve
            the free distribution of tokens to eligible users, can serve as a
            gesture of appreciation and encourage continued engagement with the
            platform.
          </li>
        </ul>
        <Typography variant="body1" paddingY="40px">
          Technical Capabilities of the Doyo Token The Doyo token incorporates
          several important technical capabilities to ensure its smooth
          operation within the Doyo ecosystem. Here are some of the key
          technical features of the Doyo token:
        </Typography>
        <ul>
          <li>
            <p style={{ fontWeight: "bold" }}>
              1. One-Time Mint & Fixed Total Supply
            </p>{" "}
            The Doyo token has a fixed total supply, meaning that once all
            tokens are minted, no additional tokens will be created. This fixed
            supply ensures scarcity and helps maintain the value of the token
            over time.
          </li>
          <li>
            <p style={{ fontWeight: "bold" }}>
              2. Send as Frozen Asset to Web3 Wallet
            </p>{" "}
            The Doyo token can be sent as a frozen asset to Web3 wallets, which
            are wallets compatible with decentralized applications (DApps) built
            on blockchain networks. This feature allows special token
            allocation. For example: VC investor related matters with adjusted
            time lock, or initiating vesting plans for future team members.
          </li>
          <li>
            <p style={{ fontWeight: "bold" }}>
              3. Time-Lock Wallet to Schedule Token Release
            </p>{" "}
            To support token release schedules or specific vesting periods, Doyo
            implements time-lock wallet functionality. This feature enables
            tokens to be locked within a wallet for a predetermined period,
            ensuring controlled and regulated token circulation as per the
            platform's requirements.
          </li>
          <li>
            <p style={{ fontWeight: "bold" }}>
              4.Multi-Sig Wallet for Security
            </p>{" "}
            To enhance the security of the Doyo token, a multi-signature
            (multi-sig) wallet mechanism is implemented. A multi-sig wallet
            requires multiple authorized parties to sign off on transactions,
            providing an additional layer of security against potential breaches
            or unauthorized access.
          </li>
          <li>
            <p style={{ fontWeight: "bold" }}>
              {" "}
              5. Implemented on BNB Smartchain
            </p>{" "}
            The Doyo token is implemented on the Binance Smart Chain (BNB), a
            blockchain platform that supports the creation and execution of
            smart contracts. By leveraging the BNB Smart Chain, Doyo benefits
            from its fast transaction speeds, low fees, and robust ecosystem,
            ensuring a seamless and efficient token experience for users.
          </li>
        </ul>
        <Typography lineHeight={2} variant="body1" paddingY="20px">
          The Doyo token represents a significant advancement in the on-demand
          home services industry. Through its utility token, Doyo introduces a
          range of use cases that enhance user engagement, simplify payments,
          incentivize participation, and foster a thriving ecosystem. With its
          technical capabilities, including fixed supply, frozen asset
          functionality, time-lock wallets, multi-sig wallets, and
          implementation on the BNB Smart Chain, Doyo ensures a secure and
          efficient token experience for its users. As Doyo continues to grow
          and evolving the dynamic world of on-demand home services, the Doyo
          token is poised to play a pivotal role in shaping the future of the
          industry
        </Typography>
      </Typography>
    </div>
  );
};

export default TokenomicsPage;
