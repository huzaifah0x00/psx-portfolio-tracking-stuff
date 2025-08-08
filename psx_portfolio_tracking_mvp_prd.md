# PSX Portfolio Tracker MVP - Product Requirements Document

## 1. Executive Summary

**Product Name**: PSX Portfolio Tracker  
**Version**: MVP 1.0  
**Target Launch**: 3 months from development start

A mobile-first portfolio tracking platform for Pakistani retail investors, focusing on reliable performance tracking, educational insights, and seamless user experience. Starting with core portfolio management features before expanding to advanced analytics.

## 2. Market Context & Opportunity

### Key Market Insights

- **Existing platforms struggle with reliability** - users report crashes during volatile periods
- **Mobile-first preference** among Pakistani investors (75%+ mobile usage)
- **Educational content gaps** - users want to understand their performance, not just see numbers
- **Cost sensitivity** - strong preference for free tiers with optional premium features
- **Local data gaps** - existing platforms lack comprehensive PSX coverage or have poor UX

### Competitive Positioning

- **vs Investify**: Better reliability and educational content
- **vs Sarmaaya**: Simpler, mobile-first design with lower learning curve
- **vs KTrade**: Pure analytics without trading complexity
- **vs International platforms**: Local focus, PSX optimization, affordable pricing

## 3. Target Users

### Primary User: Retail PSX Investor

**Demographics**:

- Age: 25-45 years
- Income: PKR 50,000-150,000/month
- Tech comfort: Moderate to high
- Investment experience: 6 months to 5 years
- Device: Primarily smartphone (Android/iOS)

**Pain Points**:

- Difficulty tracking performance across multiple stocks
- Lack of clear insights into what's driving gains/losses
- Complex interfaces in existing platforms
- Unreliable data during market hours
- No educational context for performance metrics

**Jobs to be Done**:

- Track overall portfolio performance vs KSE-100
- Understand which stocks are performing well/poorly
- Learn what portfolio metrics mean for investment decisions
- Get alerts about significant portfolio changes
- Share portfolio performance with family/advisors

## 4. MVP Feature Scope

### 4.1 Core Features (Must Have)

#### **Portfolio Dashboard**

- Real-time total portfolio value
- Daily P&L (PKR and %)
- Portfolio vs KSE-100 performance comparison
- Top 3 gainers/losers in portfolio
- Simple, clean mobile interface

#### **Stock Management**

- Add stocks with purchase price, quantity, date
- Edit/delete transactions
- View individual stock performance
- Support for 500+ PSX-listed companies
- Transaction history view

#### **Basic Analytics**

- Portfolio allocation by stock (pie chart)
- Performance over time (1D, 1W, 1M, 3M, 1Y)
- Simple metrics: Total return, Daily return, Best/worst performer
- Sector allocation (basic classification)

#### **Educational Tooltips**

- Contextual explanations for all metrics
- "Why this matters" explanations
- Links to learning resources
- Progressive disclosure of advanced concepts

#### **Price Alerts**

- Set alerts for individual stocks (above/below price)
- Portfolio value alerts (gained/lost X amount)
- Maximum 5 active alerts (MVP limitation)
- Push notifications + email

### 4.2 Essential Infrastructure

#### **Data Integration**

- PSX real-time price feeds (15-minute delay for free tier)
- Company basic information (name, sector, market cap)
- KSE-100 index data for benchmarking
- Reliable data source with 99.5% uptime target

#### **User Management**

- Simple email/password registration
- Google/Facebook social login options
- Basic profile (name, phone for alerts)
- Data backup and sync across devices

#### **Performance & Reliability**

- App loads in under 2 seconds
- Works offline (shows last synced data)
- Handles market volatility without crashes
- Background refresh every 15 minutes during market hours

### 4.3 Premium Features (Optional Upgrade)

- Real-time data (instead of 15-min delay)
- Unlimited price alerts
- Advanced portfolio analytics
- Export to Excel/PDF
- Email portfolio reports
- **Pricing**: PKR 499/month

## 5. Technical Requirements

### 5.1 Platform Strategy

- **Primary**: Mobile apps (iOS + Android)
- **Secondary**: Responsive web app
- **Future**: Desktop app (post-MVP)

### 5.2 Architecture

- **Frontend**: React Native (mobile), Next.js (web)
- **Backend**: Node.js with Express
- **Database**: PostgreSQL + Redis cache
- **Real-time**: WebSocket connections for price updates
- **Hosting**: AWS or Digital Ocean (Pakistan region)

### 5.3 Data Sources

- **Primary**: PSX official data API (requires licensing)
- **Backup**: Capital Stake API or Sarmaaya data partnership
- **Market data**: PSX website scraping (as fallback)
- **Company info**: PSX company directory

### 5.4 Performance Targets

- **App startup**: < 2 seconds
- **Data refresh**: < 5 seconds
- **Offline capability**: Last 24 hours of data
- **Battery usage**: < 5% per hour during active use

## 6. User Experience Design

### 6.1 Design Principles

- **Mobile-first**: Designed for thumb navigation
- **Pakistani context**: Colors and patterns familiar to local users
- **Educational**: Every number has context
- **Reliable**: Clear loading states, error handling

### 6.2 Key User Flows

#### **Onboarding Flow**

1. Download app / visit website
2. Create account (email/social)
3. Add first stock (guided tutorial)
4. View dashboard explanation
5. Set first price alert
6. Complete profile setup

#### **Daily Usage Flow**

1. Open app
2. View portfolio dashboard (auto-refresh)
3. Check gainers/losers
4. Tap stock for details
5. Optional: adjust alerts or add stocks

#### **Add Stock Flow**

1. Tap "Add Stock" button
2. Search by company name or symbol
3. Enter purchase details (price, quantity, date)
4. Confirm transaction
5. View updated portfolio

### 6.3 UI Requirements

- **Language**: English (with Urdu tooltips for explanations)
- **Currency**: PKR throughout
- **Date format**: DD/MM/YYYY (Pakistani standard)
- **Numbers**: Pakistani comma formatting (1,00,000)
- **Dark mode**: Support for dark/light themes

## 7. Business Model

### 7.1 Freemium Structure

**Free Tier**:

- Portfolio tracking (up to 20 stocks)
- 15-minute delayed data
- Basic analytics
- 5 price alerts
- Educational content

**Premium Tier** (PKR 499/month):

- Unlimited stocks
- Real-time data
- Unlimited alerts
- Advanced analytics
- Export features
- Priority support

### 7.2 Success Metrics

- **User Acquisition**: 1,000 registered users in first 3 months
- **Engagement**: 60% monthly active users
- **Retention**: 40% of users active after 30 days
- **Conversion**: 5% free-to-paid conversion rate
- **Revenue**: PKR 50,000 MRR by month 6

## 8. Development Timeline

### Month 1: Foundation

- Backend API development
- Database design and setup
- PSX data integration
- Basic authentication

### Month 2: Core Features

- Portfolio CRUD operations
- Dashboard development
- Mobile app development (React Native)
- Basic analytics implementation

### Month 3: Polish & Launch

- Educational content integration
- Price alerts implementation
- Performance optimization
- Beta testing and bug fixes
- App store submission

## 9. Risk Assessment

### 9.1 Technical Risks

- **PSX data licensing**: May require formal agreements
- **Data reliability**: Backup plans for data source failures
- **Scaling**: Database optimization for growing user base

### 9.2 Business Risks

- **Competition**: Existing players may copy features quickly
- **User adoption**: Educational approach may not resonate
- **Monetization**: Premium conversion may be lower than expected

### 9.3 Mitigation Strategies

- Start with publicly available data sources
- Focus on reliability over features
- Build strong educational content moat
- Develop user loyalty through superior experience

## 10. Success Criteria

### 10.1 MVP Success Definition

- **Technical**: 99.5% uptime during market hours
- **User**: 70% of users successfully add their first stock
- **Engagement**: Average 3 app opens per day per active user
- **Feedback**: 4.0+ rating on app stores
- **Business**: Clear path to premium conversion

### 10.2 Post-MVP Roadmap

- **Phase 2**: Advanced analytics and screening
- **Phase 3**: News integration and market insights
- **Phase 4**: Social features and community
- **Phase 5**: Multi-asset support (mutual funds, bonds)

## 11. Go-to-Market Strategy

### 11.1 Launch Strategy

- **Soft launch**: 100 beta users from investor communities
- **Educational content**: Blog posts about portfolio tracking
- **Social media**: LinkedIn and Facebook investor groups
- **Partnerships**: Collaborate with financial educators/YouTubers

### 11.2 User Acquisition

- **Content marketing**: "How to track your PSX portfolio" guides
- **SEO**: Target "PSX portfolio tracker" and related keywords
- **Referral program**: Free premium for successful referrals
- **Community engagement**: Reddit, Facebook investor groups

### 11.3 Competitive Advantage

- **Reliability**: "The PSX tracker that actually works"
- **Education**: "Learn while you track"
- **Simplicity**: "Portfolio tracking without the complexity"
- **Local focus**: "Built for Pakistani investors"

## 12. Future Vision

This MVP serves as the foundation for a comprehensive PSX analytics platform. Success in portfolio tracking will validate our approach to serving Pakistani retail investors and provide the user base for expanding into:

- Advanced technical analysis
- Market research and screening
- Educational courses and certification
- Community features and social trading insights
- Robo-advisory services

The goal is to become the primary platform Pakistani retail investors use to understand and improve their investment performance.
