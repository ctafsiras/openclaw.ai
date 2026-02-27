---
title: "Introducing OpenClaw"
description: "The journey from Clawd to Moltbot to OpenClaw—and why this name is here to stay."
date: 2026-01-29
author: "Peter Steinberger"
authorHandle: "steipete"
tags: ["announcement", "roadmap"]
image: "/blog/openclaw-logo-text.png"
---

<!-- original: Two months ago, I hacked together a weekend project. What started as "WhatsApp Relay" now has over 100,000 GitHub stars and drew 2 million visitors in a single week. -->
দুই মাস আগে উইকেন্ডে বসে একটা প্রজেক্ট বানিয়েছিলাম। "WhatsApp Relay" নামে যেটা শুরু হয়েছিল, সেটার এখন গিটহাবে ১০০,০০০ এর বেশি স্টার আর এক সপ্তাহে ২০ লাখের বেশি ভিজিটর। (খাইছে রে!)

<!-- original: Today, I'm excited to announce our new name: **OpenClaw**. -->
আজ আমি মহাআনন্দের সাথে আমাদের নতুন নাম ঘোষণা করছি: **OpenClaw (ওপেনক্ল)**।

## The Naming Journey (নামকরণের ইতিহাস)

<!-- original: We've been through some names. -->
আমরা কয়েকটা নামের ওপর দিয়ে গেছি।

<!-- original: **Clawd** was born in November 2025—a playful pun on "Claude" with a claw. It felt perfect until Anthropic's legal team politely asked us to reconsider. Fair enough. -->
২০২৫ এর নভেম্বরে **Clawd** এর জন্ম—"Claude" এর সাথে একটু মশকরা করে। নামটা জোস ছিল, যতক্ষণ না অ্যানথ্রোপিকের (Anthropic) লিগ্যাল টিম এসে ভদ্র ভাষায় বললো "ভাই, নামটা পাল্টান"। কিছু করার নাই, মানতেই হলো।

<!-- original: **Moltbot** came next, chosen in a chaotic 5am Discord brainstorm with the community. Molting represents growth - lobsters shed their shells to become something bigger. It was meaningful, but <a href="https://x.com/NetworkChuck/status/2016254397496414317" target="_blank" rel="noopener">it never quite rolled off the tongue</a>. -->
এরপর এলো **Moltbot**, ভোর ৫টায় ডিসকর্ডে কমিউনিটির সাথে আধাখ্যাঁচড়া ব্রেনস্টর্মিং করে এই নাম ঠিক করা হয়েছিল। Molting মানে হলো বড় হওয়া - চিংড়ি যেমন খোলস পাল্টে বড় হয়। অর্থটা ভালোই ছিল, কিন্তু <a href="https://x.com/NetworkChuck/status/2016254397496414317" target="_blank" rel="noopener">নামটা মুখে আসতো না, কেমন যেন খ্যাত খ্যাত লাগতো</a>।

<!-- original: **OpenClaw** is where we land. And this time, we did our homework: trademark searches came back clear, domains have been purchased, migration code has been written. The name captures what this project has become: -->
শেষমেশ **OpenClaw** তেই এসে থামলাম। আর এবার আমরা ভালোমতো পড়াশোনা করেছি: ট্রেডমার্ক চেক করে দেখেছি কেউ মামলা দেবে না, ডোমেইন কেনা হয়ে গেছে, মাইগ্রেশনের কোডও লেখা শেষ। এই নামটাই বলে দেয় প্রজেক্টটা আসলে কী:

<!-- original: - **Open**: Open source, open to everyone, community-driven -->
- **Open (খোলা)**: ওপেন সোর্স, সবার জন্য উন্মুক্ত, পাবলিকের চালানো প্রজেক্ট
<!-- original: - **Claw**: Our lobster heritage, a nod to where we came from -->
- **Claw (দাঁড়া)**: আমাদের চিংড়ি-ঐতিহ্য, যেখান থেকে আমাদের শুরু

## What OpenClaw Is (ওপেনক্ল আসলে কী ছাইপাশ)

<!-- original: OpenClaw is an open agent platform that runs on your machine and works from the chat apps you already use. WhatsApp, Telegram, Discord, Slack, Teams—wherever you are, your AI assistant follows. -->
OpenClaw হলো একটা ওপেন এজেন্ট প্ল্যাটফর্ম যেটা আপনার নিজের মেশিনে চলে আর আপনি সারাদিন যেসব চ্যাট অ্যাপ ব্যবহার করেন, সেখান থেকেই কাজ করে। WhatsApp, Telegram, Discord, Slack, Teams—আপনি যেখানেই ঘ্যানঘ্যান করেন, আপনার এআই অ্যাসিস্ট্যান্ট সেখানেই হাজির।

<!-- original: **Your assistant. Your machine. Your rules.** -->
**আপনার অ্যাসিস্ট্যান্ট। আপনার মেশিন। আপনার মাতবরি।**

<!-- original: Unlike SaaS assistants where your data lives on someone else's servers, OpenClaw runs where you choose—laptop, homelab, or VPS. Your infrastructure. Your keys. Your data. -->
অন্যান্য SaaS অ্যাসিস্ট্যান্টের মতো আপনার ডেটা অন্যের সার্ভারে পড়ে পচবে না। OpenClaw চলবে আপনার ইচ্ছামতো জায়গায়—ল্যাপটপ, হোমল্যাব বা VPS-এ। আপনার ইনফ্রাস্ট্রাকচার। আপনার চাবি। আপনার ডেটা।

## What's New in This Release (নতুন কী কী তামাশা আছে)

<!-- original: Along with the rebrand, we're shipping: -->
নতুন নামের সাথে সাথে আমরা যা যা গছাচ্ছি:

<!-- original: - **New Channels**: Twitch and Google Chat plugins -->
- **নতুন চ্যানেল**: Twitch আর Google Chat প্লাগিন
<!-- original: - **Models**: Support for KIMI K2.5 & Xiaomi MiMo-V2-Flash -->
- **মডেল**: KIMI K2.5 আর Xiaomi MiMo-V2-Flash এর সাপোর্ট (চাইনিজ মাল)
<!-- original: - **Web Chat**: Send images just like you can in messaging apps -->
- **ওয়েব চ্যাট**: ম্যাসেজিং অ্যাপের মতোই এখন ছবি পাঠাতে পারবেন
<!-- original: - **Security**: 34 security-related commits to harden the codebase -->
- **সিকিউরিটি**: কোডবেস শক্ত করার জন্য ৩৪টা সিকিউরিটি রিলেটেড কমিট (যাতে সহজে হ্যাক না হয়)

<!-- original: I'd like to thank all security folks for their hard work in helping us harden the project. We've released <a href="https://github.com/vignesh07/clawdbot-formal-models" target="_blank" rel="noopener">machine-checkable security models</a> this week and are continuing to work on additional security improvements. Remember that prompt injection is still an industry-wide unsolved problem, so it's important to use strong models and to study our <a href="https://docs.openclaw.ai/gateway/security" target="_blank" rel="noopener">security best practices</a>. -->
প্রজেক্টটাকে শক্তপোক্ত বানানোর জন্য সব সিকিউরিটি আতেলদের ধন্যবাদ। আমরা এই সপ্তাহে <a href="https://github.com/vignesh07/clawdbot-formal-models" target="_blank" rel="noopener">মেশিন-চেকেবল সিকিউরিটি মডেল</a> রিলিজ করেছি আর আরও সিকিউরিটি নিয়ে ঘষামাজা করছি। মনে রাখবেন, প্রম্পট ইনজেকশন (Prompt Injection) এখনো পুরো ইন্ডাস্ট্রির একটা সমাধান না হওয়া প্যারা, তাই ভালো মডেল ব্যবহার করা আর আমাদের <a href="https://docs.openclaw.ai/gateway/security" target="_blank" rel="noopener">সিকিউরিটি বেস্ট প্র্যাকটিসগুলো</a> পড়া খুব জরুরি (নইলে বাঁশ খাবেন)।

## The Road Ahead (সামনের রাস্তা)

<!-- original: What's next? Security remains our top priority. We're also focused on gateway reliability and adding polish plus support for more models and providers. -->
সামনে কী? সিকিউরিটিই আমাদের মূল টার্গেট। এছাড়া গেটওয়ের নির্ভরযোগ্যতা বাড়ানো, আরও চকচকে করা, আর নতুন নতুন মডেল ও প্রোভাইডারের সাপোর্ট যুক্ত করার দিকেও আমরা নজর দিচ্ছি।

<!-- original: This project has grown far beyond what I could maintain alone. Over the last few days I've worked on adding maintainers and we're slowly setting up processes so we can deal with the insane influx of PRs and Issues. I'm also figuring out how to pay maintainers properly—full-time if possible. If you wanna help, consider <a href="https://github.com/openclaw/openclaw/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener">contributing</a> or <a href="https://github.com/sponsors/openclaw" target="_blank" rel="noopener">sponsoring the org</a>. -->
এই প্রজেক্ট এত বড় হয়ে গেছে যে আমার একার পক্ষে আর টানা সম্ভব না। গত কয়েকদিন ধরে আমি নতুন মেইনটেইনার যোগ করার কাজ করছি আর আমরা আস্তে আস্তে একটা প্রসেস দাঁড় করাচ্ছি যাতে এই পাগল করা PR আর Issue-র বন্যা সামলানো যায়। মেইনটেইনারদের কীভাবে ঠিকমতো টাকা দেওয়া যায় সেটাও ভাবছি—সম্ভব হলে ফুল-টাইম। আপনি যদি সাহায্য করতে চান, তাহলে <a href="https://github.com/openclaw/openclaw/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener">কন্ট্রিবিউট করার কথা ভাবতে পারেন</a> অথবা <a href="https://github.com/sponsors/openclaw" target="_blank" rel="noopener">আমাদের স্পন্সর করতে পারেন (পয়সা দিলে খুশি হবো)</a>।

## Thank You (ধন্যবাদ জ্ঞাপন পর্ব)

<!-- original: To the Claw Crew—every clawtributor who's shipped code, filed issues, joined our Discord, or just tried the project: thank you. You are what makes OpenClaw special. -->
Claw Crew-কে—প্রত্যেক ক্ল-ট্রিবিউটর (clawtributor) যারা কোড দিয়েছেন, ইস্যু খুলেছেন, আমাদের ডিসকর্ডে জয়েন করেছেন বা শুধু প্রজেক্টটা চালিয়ে দেখেছেন: আপনাদের সবাইকে ধন্যবাদ। আপনারাই OpenClaw-কে স্পেশাল বানিয়েছেন।

<!-- original: The lobster has molted into its final form. Welcome to OpenClaw. -->
চিংড়িটা খোলস পাল্টে তার আসল রূপে চলে এসেছে। OpenClaw-তে স্বাগতম।

---

<!-- original: *Get started: <a href="https://openclaw.ai" target="_blank" rel="noopener">openclaw.ai</a>* -->
*শুরু করেন: <a href="https://openclaw.ai" target="_blank" rel="noopener">openclaw.ai</a>*

<!-- original: *Join the Claw Crew: <a href="https://discord.gg/openclaw" target="_blank" rel="noopener">Discord</a>* -->
*Claw Crew-তে জয়েন মারেন: <a href="https://discord.gg/openclaw" target="_blank" rel="noopener">Discord</a>*

<!-- original: *Star on GitHub: <a href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener">github.com/openclaw/openclaw</a>* -->
*গিটহাবে স্টার দিয়ে ভাব নেন: <a href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener">github.com/openclaw/openclaw</a>*

— Peter

<!-- original: P.S. Yes, the mascot is still a lobster. Some things are sacred. 🦞 -->
পুনশ্চ: হ্যাঁ, আমাদের মাসকট এখনো ওই চিংড়িটাই আছে। কিছু জিনিস তো পবিত্র মানতে হবে ভাই। 🦞
