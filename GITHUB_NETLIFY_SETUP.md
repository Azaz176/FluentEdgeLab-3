# Push to GitHub & Deploy on Netlify - Step by Step Guide

## Prerequisites

### Step 1: Install Git (if not installed)

1. **Download Git:**
   - Go to https://git-scm.com/download/win
   - Download and install Git for Windows
   - During installation, use default settings

2. **Verify Installation:**
   - Open a new terminal/PowerShell
   - Run: `git --version`
   - Should show something like: `git version 2.x.x`

### Step 2: Create GitHub Account

1. Go to https://github.com
2. Sign up for a free account (if you don't have one)
3. Verify your email

---

## Part 1: Push Code to GitHub

### Step 1: Initialize Git Repository

Open PowerShell/Terminal in your project folder and run:

```bash
cd "C:\Users\azaza\OneDrive\Desktop\FluentEdgeLab"
git init
```

### Step 2: Configure Git (First time only)

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Step 3: Add All Files

```bash
git add .
```

This adds all files (respecting `.gitignore`)

### Step 4: Make Your First Commit

```bash
git commit -m "Initial commit: React + Vite + TypeScript setup"
```

### Step 5: Create GitHub Repository

1. **Go to GitHub:**
   - Visit https://github.com/new
   - Or click the "+" icon → "New repository"

2. **Repository Settings:**
   - Repository name: `fluent-edge` (or any name you like)
   - Description: "FluentEdgeLab - React + Vite + TypeScript"
   - Visibility: **Public** (for free Netlify) or **Private** (if you have paid Netlify)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

### Step 6: Connect Local Repository to GitHub

GitHub will show you commands. Use these:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/fluent-edge.git
git push -u origin main
```

**Replace `YOUR_USERNAME`** with your actual GitHub username.

**Note:** If GitHub asks for authentication:
- Use a **Personal Access Token** (not password)
- Go to: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
- Generate new token with `repo` permissions
- Use this token as password when prompted

### Step 7: Verify

1. Go to your GitHub repository page
2. You should see all your files there
3. ✅ Done! Your code is on GitHub

---

## Part 2: Deploy to Netlify

### Step 1: Sign Up for Netlify

1. Go to https://netlify.com
2. Click "Sign up"
3. Choose "Sign up with GitHub" (easiest option)
4. Authorize Netlify to access your GitHub

### Step 2: Create New Site

1. In Netlify dashboard, click **"Add new site"**
2. Select **"Import an existing project"**
3. Choose **"Deploy with GitHub"**
4. Authorize Netlify (if prompted)

### Step 3: Select Repository

1. Find and select your `fluent-edge` repository
2. Click on it

### Step 4: Configure Build Settings

Netlify should auto-detect, but verify these settings:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Base directory:** (leave empty)

**Note:** The `netlify.toml` file we created will handle these automatically, but you can verify.

### Step 5: Deploy!

1. Click **"Deploy site"**
2. Wait 1-2 minutes for build to complete
3. ✅ Your site is live!

### Step 6: Get Your Site URL

- Netlify will give you a URL like: `https://random-name-123.netlify.app`
- Your site is now live at this URL!

---

## Part 3: Connect Custom Domain (GoDaddy)

### Step 1: Add Domain in Netlify

1. In Netlify dashboard → Your site → **Site settings**
2. Go to **"Domain management"**
3. Click **"Add custom domain"**
4. Enter your domain: `yourdomain.com`
5. Click **"Verify"**

### Step 2: Configure DNS in GoDaddy

Netlify will show you DNS records to add:

1. **Go to GoDaddy:**
   - Log into GoDaddy
   - Go to "My Products" → "DNS"

2. **Add DNS Records:**
   
   **Option A: Use Netlify Nameservers (Easiest)**
   - In Netlify, it will show nameservers like:
     - `dns1.p01.nsone.net`
     - `dns2.p01.nsone.net`
   - In GoDaddy, change nameservers to these
   - Wait 24-48 hours for propagation

   **Option B: Use DNS Records (Faster)**
   - Add A Record:
     - Type: `A`
     - Name: `@` (or leave blank)
     - Value: Netlify IP (shown in Netlify dashboard)
     - TTL: `600`
   
   - Add CNAME Record:
     - Type: `CNAME`
     - Name: `www`
     - Value: `your-site-name.netlify.app`
     - TTL: `600`

### Step 3: Wait for SSL

1. Netlify automatically provisions SSL certificate
2. Takes 5-60 minutes
3. Your site will be available at `https://yourdomain.com`

---

## Quick Command Reference

### Git Commands (for future updates)

```bash
# After making changes to your code:
git add .
git commit -m "Description of changes"
git push
```

Netlify will automatically rebuild and deploy when you push to GitHub!

---

## Troubleshooting

### Git Authentication Issues

**If `git push` asks for password:**
- GitHub no longer accepts passwords
- Use Personal Access Token instead:
  1. GitHub → Settings → Developer settings → Personal access tokens
  2. Generate token with `repo` scope
  3. Use token as password

### Netlify Build Fails

**Common issues:**
- Check build logs in Netlify dashboard
- Make sure `package.json` has correct build script
- Verify `netlify.toml` is in root directory
- Check that all dependencies are in `package.json`

### Domain Not Working

- Wait 24-48 hours for DNS propagation
- Check DNS at: https://www.whatsmydns.net/
- Verify DNS records in GoDaddy match Netlify instructions
- Make sure SSL certificate is provisioned (green lock in Netlify)

---

## Summary

✅ **GitHub Setup:**
1. Install Git
2. `git init`
3. `git add .`
4. `git commit -m "Initial commit"`
5. Create repo on GitHub
6. `git remote add origin [URL]`
7. `git push -u origin main`

✅ **Netlify Setup:**
1. Sign up with GitHub
2. Import repository
3. Deploy (auto-configured)
4. Add custom domain
5. Configure DNS in GoDaddy

**That's it!** Your site will auto-deploy every time you push to GitHub! 🚀

