---
title: "OpenClaw Partners with VirusTotal for Skill Security"
description: "ClawHub skills are now scanned by VirusTotal's threat intelligence platform—bringing industry-leading security to the AI agent ecosystem."
date: 2026-02-07
authors:
  - name: "Peter Steinberger"
    handle: "steipete"
  - name: "Jamieson O'Reilly"
    handle: "theonejvo"
  - name: "Bernardo Quintero"
    handle: "bquintero"
draft: false
tags: ["security", "announcement", "clawhub"]
image: "/blog/openclaw-virustotal.svg"
---

<!-- original: Today we're announcing a partnership with [VirusTotal](https://www.virustotal.com), the world's leading threat intelligence platform, to bring security scanning to ClawHub—OpenClaw's skill marketplace. -->
আজ আমরা দুনিয়ার সবচেয়ে বড় থ্রেট ইন্টেলিজেন্স প্ল্যাটফর্ম [VirusTotal](https://www.virustotal.com) এর সাথে পার্টনারশিপ ঘোষণা করছি, যাতে ClawHub (ওপেনক্ল-এর স্কিল বেচাকেনার জায়গা)-এ সিকিউরিটি স্ক্যানিং আনা যায়।

<!-- original: **TL;DR:** All skills published to ClawHub are now scanned using VirusTotal's threat intelligence, including their new Code Insight capability. This provides an additional layer of security for the OpenClaw community. -->
**শর্টকাট কথা (TL;DR):** ClawHub-এ পাবলিশ হওয়া সব স্কিল এখন VirusTotal-এর থ্রেট ইন্টেলিজেন্স দিয়ে স্ক্যান করা হবে (নতুন Code Insight ফিচারসহ)। এতে ওপেনক্ল কমিউনিটির সিকিউরিটিতে আরেকটা শক্ত তালা পড়লো।

## Why This Matters (কেন এটা নিয়ে এত মাতামাতি)

<!-- original: For the past 20 years, security models have been built around locking devices and applications down—setting boundaries between inter-process communications, separating internet from local, sandboxing untrusted code. These principles remain important. -->
গত ২০ বছর ধরে, সিকিউরিটি মডেল বানানো হয়েছে ডিভাইস আর অ্যাপ্লিকেশনে তালা মারার জন্য—কমিউনিকেশনের মাঝে দেয়াল তোলা, ইন্টারনেট থেকে লোকালকে আলাদা করা, আজেবাজে কোড স্যান্ডবক্সে ফেলে রাখা। এগুলো এখনো দরকারি।

<!-- original: But AI agents represent a fundamental shift. -->
কিন্তু এআই এজেন্টরা পুরো গেমটাই উল্টে দিয়েছে।

<!-- original: Unlike traditional software that does exactly what code tells it to do, AI agents interpret natural language and make decisions about actions. They blur the boundary between user intent and machine execution. They can be manipulated through language itself. -->
সাধারণ সফটওয়্যার কোডে যা লেখা থাকে ঠিক তাই করে, কিন্তু এআই এজেন্টরা মানুষের মুখের ভাষা বুঝে নিজে নিজে ডিসিশন নেয়। এরা ইউজারের ইচ্ছা আর মেশিনের কাজের মাঝের পার্থক্যটা গুলিয়ে দেয়। এদেরকে শুধু কথা দিয়েই বোকা বানানো যায় (ম্যানিপুলেট করা যায়)।

<!-- original: We understand that with the great utility of a tool like OpenClaw comes great responsibility. Done wrong, an AI agent is a liability. Done right, we can change personal computing for the better. -->
আমরা বুঝি যে OpenClaw-এর মতো জবরদস্ত টুলের সাথে বড় দায়িত্বও চলে আসে। ঠিকমতো না বানালে একটা এআই এজেন্ট গলার কাঁটা হয়ে যেতে পারে। আর ঠিকঠাক বানালে, এটা পুরো পার্সোনাল কম্পিউটিংয়ের খোলনলচে বদলে দিতে পারে।

<!-- original: OpenClaw skills are powerful. They extend what your AI agent can do—from controlling smart home devices to managing finances to automating workflows. But with that power comes risk. -->
OpenClaw এর স্কিলগুলো বিশাল পাওয়ারফুল। এরা আপনার এআই এজেন্টের ক্ষমতা বাড়িয়ে দেয়—স্মার্ট হোম কন্ট্রোল করা থেকে শুরু করে টাকার হিসাব রাখা, কাজের অটোমেশন—সব করতে পারে। কিন্তু পাওয়ার বাড়লে রিস্কও বাড়ে।

<!-- original: Skills are code that runs in your agent's context, with access to your tools and your data. A malicious skill could: -->
স্কিলগুলো হলো এমন কোড, যা আপনার এজেন্টের ভেতরে চলে এবং আপনার টুলস আর ডেটাতে হাত দিতে পারে। কোনো শয়তান স্কিল চাইলে যা করতে পারে:

<!-- original: - Exfiltrate sensitive information -->
- আপনার গোপন ডেটা চুরি করে চম্পট দিতে পারে
<!-- original: - Execute unauthorized commands -->
- না-বলা কমান্ড চালিয়ে দিতে পারে
<!-- original: - Send messages on your behalf -->
- আপনার নাম ভাঙিয়ে আজেবাজে মেসেজ পাঠাতে পারে
<!-- original: - Download and run external payloads -->
- বাইরের দুনিয়া থেকে ভাইরাস নামিয়ে রান করে দিতে পারে

<!-- original: As the OpenClaw ecosystem grows, so does the attack surface. We've already seen [documented cases](https://blog.virustotal.com/2026/02/from-automation-to-infection-how.html) of malicious actors attempting to exploit AI agent platforms. We're not waiting for this to become a bigger problem. -->
OpenClaw ইকোসিস্টেম যত বড় হচ্ছে, হ্যাকারদের টার্গেটও তত বড় হচ্ছে। এআই এজেন্ট প্ল্যাটফর্মের বাঁশ দেওয়ার চেষ্টা যে অলরেডি শুরু হয়েছে, তার [প্রমাণও আমরা পেয়েছি](https://blog.virustotal.com/2026/02/from-automation-to-infection-how.html)। এটা বড় কোনো ক্যাচাল হওয়ার আগেই আমরা আটঘাট বেঁধে নামছি।

## How It Works (এটা কীভাবে কাজ করে)

<!-- original: When a skill is published to ClawHub: -->
ClawHub-এ কোনো স্কিল পাবলিশ করলে যা ঘটে:

<!-- original: 1. **Deterministic Packaging** — The skill files are bundled into a ZIP with consistent compression and timestamps, along with a `_meta.json` containing publisher info and version history -->
১. **প্যাকেজিং (Deterministic Packaging)** — স্কিল ফাইলগুলোকে গুছিয়ে একটা ZIP ফাইলে ভরা হয়, সাথে থাকে একটা `_meta.json` যেখানে পাবলিশারের চৌদ্দগুষ্ঠির খবর আর ভার্সন হিস্ট্রি থাকে।
<!-- original: 2. **Hash Computation** — A SHA-256 hash is computed for the entire bundle, creating a unique fingerprint -->
২. **হ্যাশ মারা (Hash Computation)** — পুরো বান্ডেলের একটা SHA-256 হ্যাশ বানানো হয়, যেটা এক ধরনের ডিজিটাল ফিঙ্গারপ্রিন্ট।
<!-- original: 3. **VirusTotal Lookup** — The hash is checked against VirusTotal's database. If the file exists with a Code Insight verdict, results are returned immediately -->
৩. **VirusTotal-এ খোঁজা** — এই হ্যাশটাকে VirusTotal-এর ডেটাবেসে চেক করা হয়। যদি আগে থেকেই ফাইলটা থাকে এবং তাদের কোনো রায় দেওয়া থাকে, তবে সাথে সাথেই রেজাল্ট চলে আসে।
<!-- original: 4. **Upload & Analysis** — If not found (or no AI analysis exists), the bundle is uploaded to VirusTotal for fresh scanning via their v3 API -->
৪. **আপলোড ও স্ক্যান** — যদি আগে থেকে না থাকে, তাহলে পুরো ফাইলটা VirusTotal-এ আপলোড করে নতুন করে স্ক্যান করা হয় (তাদের v3 API দিয়ে)।
<!-- original: 5. **Code Insight** — VirusTotal's LLM-powered Code Insight (powered by Gemini) performs a security-focused analysis of the entire skill package, starting from SKILL.md and including any referenced scripts or resources. It doesn't just look at what the skill claims to do—it summarizes what the code actually does from a security perspective: whether it downloads and executes external code, accesses sensitive data, performs network operations, or embeds instructions that could coerce the agent into unsafe behavior -->
৫. **কোড ইনসাইট (Code Insight)** — VirusTotal-এর এআই-পাওয়ার্ড Code Insight (জেমিনির মাধ্যমে চলে) স্কিল প্যাকেজটার সিকিউরিটি ঘেঁটে দেখে। স্কিলটা শুধু মুখে বড় বড় বুলি ঝাড়লেই হবে স্কুল না—এটা আসলে ভেতরে ভেতরে কী আকাম করছে (যেমন: বাইরের কোড নামাচ্ছে কিনা, চুরি করে ডেটা দেখছে কিনা, আজেবাজে নেটওয়ার্ক কানেকশন তৈরি করছে কিনা) সব বের করে ফেলে।
<!-- original: 6. **Auto-Approval** — Skills with a "benign" Code Insight verdict are automatically approved. Anything flagged as suspicious is automatically marked with a warning. Skills flagged as malicious are instantly blocked from download -->
৬. **অটো-অ্যাপ্রুভাল** — স্কিল যদি "সাধু (benign)" প্রমাণিত হয়, তাহলে অটো পাস। যদি সন্দেহজনক কিছু থাকে, তবে একটা ওয়ার্নিং ঝুলিয়ে দেওয়া হয়। আর যদি প্রমাণিত হয় যে এটা খাচ্চর কোড (malicious), তবে সাথে সাথে ব্লক!
<!-- original: 7. **Daily Re-scans** — All active skills are re-scanned daily to detect if a previously clean skill becomes malicious -->
৭. **ডেইলি স্ক্যানিং** — সব চালু স্কিল প্রতিদিন স্ক্যান করা হয়, যাতে আগে ভালো থাকা কোনো স্কিল হুট করে শয়তানি শুরু করলে ধরা পড়ে যায়।

<!-- original: Scan results are displayed on every skill page and in version history, with direct links to the full VirusTotal report. -->
স্ক্যান রেজাল্টগুলো স্কিলের পেজে আর ভার্সন হিস্ট্রিতে দেখা যাবে, সাথে VirusTotal-এর ফুল রিপোর্টের ডিরেক্ট লিংকও থাকবে।

<!-- original: VirusTotal already protects the [Hugging Face](https://huggingface.co/blog/virustotal) ecosystem using hash-based lookups against their threat intelligence database. Our integration goes further—we upload full skill bundles for Code Insight analysis, giving the AI a complete picture of the skill's behavior rather than just matching known signatures. -->
VirusTotal অলরেডি তাদের হ্যাশ-বেসড সিস্টেম দিয়ে [Hugging Face](https://huggingface.co/blog/virustotal)-কে প্রটেকশন দিচ্ছে। আমরা আরেক কাঠি সরেস—আমরা পুরো স্কিল বান্ডেলটাই আপলোড করি Code Insight-এর জন্য, যাতে এআই স্কিলের পুরোপুরি চরিত্র বুঝতে পারে, শুধু আগের চেনা ভাইরাসের সাথে মিলিয়েই ক্ষান্ত না হয়।

## What This Is—And What It Isn't (এটা কী—আর কী নয়)

<!-- original: Let's be clear: **this is not a silver bullet.** -->
সোজা বাংলায় বলি: **এটা জাদুর কাঠি নয় যে সব মুশকিল আসান হয়ে যাবে।**

<!-- original: VirusTotal scanning won't catch everything. A skill that uses natural language to instruct an agent to do something malicious won't trigger a virus signature. A carefully crafted prompt injection payload won't show up in a threat database. -->
VirusTotal স্ক্যানিং দুনিয়ার সব ঘাপলা ধরতে পারবে না। এমন কোনো স্কিল যেটা সাধারণ ভাষা ব্যবহার করে এজেন্টকে দিয়ে কোনো শয়তানি করায়, সেটা ভাইরাসের সিগনেচারে ধরা পড়বে না। আবার খুব ধুরন্ধর লেভেলের প্রম্পট ইনজেকশন থ্রেট ডেটাবেসে নাও থাকতে পারে।

<!-- original: What this does provide: -->
এটা যা যা করবে:

<!-- original: - **Detection of known malware** — Trojans, stealers, backdoors, malicious payloads -->
- **চেনা ম্যালওয়্যার ধরা** — ট্রোজান, ডেটা চোর, ব্যাকডোর, আর হাবিজাবি ভাইরাস।
<!-- original: - **Behavioral analysis** — Code Insight identifies suspicious patterns even in novel threats -->
- **চরিত্র বিচার** — Code Insight নতুন ধরনের ভাইরাসের মধ্যেও সন্দেহজনক চালচলন ধরতে পারে।
<!-- original: - **Supply chain visibility** — Catching compromised dependencies and embedded executables -->
- **সাপ্লাই চেইন নজরদারি** — ভেতরে লুকিয়ে থাকা ঘাপলা ডিপেন্ডেন্সি বা রান করা যায় এমন ফাইল ধরা।
<!-- original: - **A signal of intent** — We're investing in security, and this is the first of many layers -->
- **আমাদের সদিচ্ছা** — আমরা সিকিউরিটির পেছনে সিরিয়াসলি কাজ করছি, আর এটা তার প্রথম ধাপ মাত্র।

<!-- original: Security is defense in depth. This is one layer. More are coming. -->
সিকিউরিটি মানে হলো স্তরে স্তরে নিরাপত্তা। এটা একটা লেয়ার। সামনে এরকম আরও আসছে।

## The Bigger Picture (বড় ক্যানভাস)

<!-- original: This partnership is part of a broader security initiative at OpenClaw. In the coming days, we'll be publishing: -->
এই পার্টনারশিপটা OpenClaw-এর বড় একটা সিকিউরিটি উদ্যোগের অংশ। আগামী কয়েকদিনের মধ্যে আমরা যা যা ছাড়বো:

<!-- original: - **A comprehensive threat model** for the OpenClaw ecosystem -->
- OpenClaw ইকোসিস্টেমের জন্য **একটা পাকাপোক্ত থ্রেট মডেল (বাঁশ খাওয়ার নকশা)**
<!-- original: - **A public security roadmap** tracking defensive engineering goals -->
- সিকিউরিটির জন্য **একটা পাবলিক রোডম্যাপ**
<!-- original: - **Details on our security audit** covering the entire codebase -->
- পুরো কোডবেস নিয়ে আমাদের **সিকিউরিটি অডিটের খুঁটিনাটি**
<!-- original: - **A formal security reporting process** with defined SLAs -->
- সিকিউরিটি রিপোর্ট করার জন্য **একটা ফর্মাল প্রসেস**

<!-- original: Follow progress and read the full security program overview at [trust.openclaw.ai](https://trust.openclaw.ai/). -->
আপডেট পেতে আর পুরো সিকিউরিটি প্রোগ্রামের ওভারভিউ পড়তে ঘুরে আসুন [trust.openclaw.ai](https://trust.openclaw.ai/)-তে।

<!-- original: We've brought on [Jamieson O'Reilly](https://twitter.com/theonejvo) (founder of Dvuln, co-founder of Aether AI, CREST Advisory Council member) as lead security advisor to guide this program. -->
আমরা এই প্রোগ্রামকে গাইড করার জন্য [Jamieson O'Reilly](https://twitter.com/theonejvo)-কে লিড সিকিউরিটি অ্যাডভাইজার হিসেবে নিয়ে এসেছি। (উনি Dvuln-এর ফাউন্ডার, Aether AI-এর কো-ফাউন্ডার আর CREST অ্যাডভাইজরি কাউন্সিলের মেম্বার—মানে বেশ ওজনদার লোক)।

<!-- original: AI agents that take real-world actions deserve real security processes. We're building them. -->
যেসব এআই এজেন্ট বাস্তবের কাজগুলো করে, তাদের সিকিউরিটিও আসল হওয়া উচিত। আমরা সেটাই বানাচ্ছি।

## For Skill Publishers (যারা স্কিল বানান তাদের জন্য জ্ঞান)

<!-- original: If you publish skills to ClawHub, your code will now be scanned automatically. Here's how it works: -->
আপনি যদি ClawHub-এ স্কিল ছাড়েন, আপনার কোড এখন নিজে নিজেই স্ক্যান হয়ে যাবে। কাহিনী যেভাবে ঘোরে:

<!-- original: 1. Your skill is published and the VT scan runs asynchronously -->
১. আপনি স্কিল পাবলিশ করবেন আর পেছন দিয়ে চুপিচুপি VT স্ক্যান রান হবে।
<!-- original: 2. If the scan returns a "benign" verdict, your skill is automatically approved -->
২. স্ক্যানে যদি "সাধু" প্রমাণিত হন, তবে স্কিল অটো-পাস।
<!-- original: 3. If something is flagged as suspicious, your skill is marked with a warning but remains available for transparency -->
৩. সন্দেহজনক কিছু পেলে, স্কিলে ওয়ার্নিং ঝুলিয়ে দেওয়া হবে, তবে পাবলিক দেখতে পাবে।
<!-- original: 4. If flagged as malicious, your skill is instantly blocked from download -->
৪. আর যদি খাচ্চর কোড হিসেবে ধরা পড়েন, তবে ডাইরেক্ট ব্লক!
<!-- original: 5. You can check scan status on your skill's detail page with a direct link to the full VirusTotal report -->
৫. আপনি স্কিলের পেজ থেকে স্ক্যানের স্ট্যাটাস আর VirusTotal-এর ফুল রিপোর্ট দেখতে পারবেন।

<!-- original: We expect some false positives initially—security tooling isn't perfect. If your skill is incorrectly flagged, reach out to us at security@openclaw.ai and we'll review it. -->
প্রথম দিকে কিছু ভুলভাল ধরা পড়তে পারে (ফলস পজিটিভ)—সিকিউরিটি টুল তো আর শতভাগ পারফেক্ট না। আপনার ভালো স্কিল যদি ভুল করে ঘাপলা হিসেবে ধরা পড়ে, তবে security@openclaw.ai-তে মেইল মারেন, আমরা দেখে দেবো।

## For Users (পাবলিকের জন্য)

<!-- original: When browsing ClawHub, you'll see scan status for each skill. This gives you one more data point when deciding what to trust. But remember: -->
ClawHub ঘাঁটার সময় প্রতিটি স্কিলের স্ক্যান স্ট্যাটাস দেখতে পাবেন। এতে করে কোনটায় বিশ্বাস করবেন সেটা বুঝতে একটু সুবিধা হবে। কিন্তু মাথায় রাখবেন:

<!-- original: - A clean scan doesn't mean a skill is safe -->
- স্ক্যান ক্লিন মানেই যে স্কিল ১০০% সেইফ, তা কিন্তু নয়।
<!-- original: - Always review what permissions a skill requests -->
- স্কিল কী কী পারমিশন চাইছে, সেটা ভালো করে পড়ে নেবেন।
<!-- original: - Start with skills from publishers you trust -->
- চেনা আর বিশ্বস্ত পাবলিশারদের স্কিল আগে ট্রাই করবেন।
<!-- original: - Report suspicious behavior to security@openclaw.ai -->
- কোনো কিছু খটকা লাগলে security@openclaw.ai-তে রিপোর্ট করবেন।

## Thank You, VirusTotal (VirusTotal-কে একগাদা থ্যাংকস)

<!-- original: We're grateful to Bernardo Quintero and the VirusTotal team for their partnership. Their platform protects millions of users every day, and we're proud to bring that protection to the OpenClaw community. -->
আমরা Bernardo Quintero আর VirusTotal টিমের কাছে এই পার্টনারশিপের জন্য কৃতজ্ঞ। তাদের প্ল্যাটফর্ম প্রতিদিন লাখ লাখ ইউজারকে বাঁশ খাওয়া থেকে বাঁচায়, আর সেই প্রটেকশন OpenClaw কমিউনিটির জন্য আনতে পেরে আমরা বেশ ফুরফুরে মেজাজে আছি।

## What's Next (সামনে কী)

<!-- original: This is the beginning, not the end. We're committed to making OpenClaw the most secure AI agent platform available. Expect more announcements soon. -->
এটা তো কেবল শুরু, শেষ নয়। OpenClaw-কে দুনিয়ার সবচেয়ে সিকিউর এআই প্ল্যাটফর্ম বানাতে আমরা উঠেপড়ে লেগেছি। সামনে এমন আরও অনেক খবর আসছে।

<!-- original: The lobster grows stronger. 🦞 -->
চিংড়িটা দিনে দিনে আরও শক্তপোক্ত হচ্ছে। 🦞

---

<!-- original: *Questions about security? security@openclaw.ai* -->
*সিকিউরিটি নিয়ে কোনো প্যাঁচাল থাকলে? security@openclaw.ai*

<!-- original: *Publish skills: clawhub.ai* -->
*নিজের স্কিল পাবলিশ করুন: clawhub.ai*

<!-- original: *Join the discussion: Discord* -->
*আড্ডায় যোগ দিন: Discord*

— Peter, Jamieson, and Bernardo
