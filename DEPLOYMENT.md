# Deployment Guide

## Option 1: Vercel (Recommended - Easiest)

Vercel is the easiest and fastest way to deploy React + Vite apps.

### Steps:

1. **Install Vercel CLI (optional, or use web interface):**
   ```bash
   npm install -g vercel
   ```

2. **Deploy via Web Interface (Easiest):**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub, GitLab, or Bitbucket
   - Click "Add New Project"
   - Import your repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

3. **Deploy via CLI:**
   ```bash
   vercel
   ```
   Follow the prompts. It will ask:
   - Link to existing project or create new
   - Project settings (auto-detected)
   - Deploy to production

4. **Configure Build Settings (if needed):**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

5. **Connect Custom Domain (GoDaddy):**
   - In Vercel dashboard → Project → Settings → Domains
   - Add your domain (e.g., `yourdomain.com`)
   - Follow DNS instructions:
     - Add A record: `@` → Vercel IP
     - Add CNAME: `www` → `cname.vercel-dns.com`
   - Or use Vercel's nameservers (easier)

### Advantages:
- ✅ Automatic HTTPS/SSL
- ✅ Automatic deployments on git push
- ✅ Free tier with generous limits
- ✅ Global CDN
- ✅ Zero configuration needed
- ✅ React Router works automatically

---

## Option 2: Netlify

Netlify is another excellent platform for React apps.

### Steps:

1. **Install Netlify CLI (optional):**
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy via Web Interface:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login with GitHub, GitLab, or Bitbucket
   - Click "Add new site" → "Import an existing project"
   - Connect your repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Deploy via CLI:**
   ```bash
   netlify deploy --prod
   ```

4. **Create `netlify.toml` (optional, for better config):**
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

5. **Connect Custom Domain:**
   - In Netlify dashboard → Site settings → Domain management
   - Add custom domain
   - Follow DNS instructions

### Advantages:
- ✅ Automatic HTTPS/SSL
- ✅ Automatic deployments on git push
- ✅ Free tier available
- ✅ Global CDN
- ✅ Easy form handling
- ✅ React Router works automatically

---

## Option 3: Traditional Hosting (Hostinger + GoDaddy)

For traditional web hosting with Hostinger.

### Step 1: Build Your Production App

1. **Build the production version:**
   ```bash
   npm run build
   ```

2. **This creates a `dist` folder** with all your production files.

### Step 2: Prepare Files for Hostinger

#### Option A: Standard Web Hosting (cPanel/File Manager)

1. **Compress the dist folder:**
   - Zip the entire `dist` folder contents (not the folder itself)
   - All files should be at the root level of the zip

2. **Files to upload:**
   - `index.html`
   - `assets/` folder (contains CSS and JS files)
   - `.htaccess` file (for React Router)

#### Option B: Using FTP

1. **Get FTP credentials from Hostinger:**
   - Host: Usually `ftp.yourdomain.com` or IP address
   - Username: Your hosting username
   - Password: Your hosting password
   - Port: 21 (FTP) or 22 (SFTP)

2. **Upload files:**
   - Connect via FTP client (FileZilla, WinSCP, etc.)
   - Navigate to `public_html` folder (or `www` folder)
   - Upload all contents from `dist/` folder
   - Make sure `index.html` is in the root of `public_html`

### Step 3: Configure Hostinger

#### For React Router (SPA) - Important!

Since you're using React Router, you need to configure URL rewriting:

1. **Create `.htaccess` file** in your `dist` folder (before uploading):

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

2. **Upload this `.htaccess` file** to your `public_html` root along with other files.

### Step 4: Connect GoDaddy Domain to Hostinger

#### Method 1: Using Nameservers (Recommended)

1. **Get Hostinger nameservers:**
   - Log into Hostinger
   - Go to "Domains" → Your domain (if managed by Hostinger)
   - Or check hosting panel for nameservers
   - Usually something like:
     - `ns1.dns-parking.com`
     - `ns2.dns-parking.com`

2. **Update nameservers in GoDaddy:**
   - Log into GoDaddy
   - Go to "My Products" → "DNS"
   - Find your domain
   - Click "Change" next to Nameservers
   - Select "Custom" and enter Hostinger's nameservers
   - Save changes

3. **Wait for propagation** (24-48 hours, usually faster)

#### Method 2: Using A Record (Alternative)

1. **Get Hostinger IP address:**
   - Check Hostinger hosting panel for your server IP

2. **Update DNS in GoDaddy:**
   - Go to GoDaddy DNS settings
   - Add/Edit A Record:
     - Type: A
     - Name: @ (or leave blank for root domain)
     - Value: Hostinger IP address
     - TTL: 600 (or default)

3. **Add CNAME for www:**
   - Type: CNAME
   - Name: www
   - Value: yourdomain.com
   - TTL: 600

### Step 5: SSL Certificate (HTTPS)

1. **Hostinger usually provides free SSL:**
   - Check Hostinger control panel
   - Look for "SSL" or "Security" section
   - Enable "Let's Encrypt" or "Auto SSL"
   - This is important for HTTPS!

### Step 6: Verify Deployment

1. **Wait 24-48 hours** for DNS propagation
2. **Check your domain:**
   - Visit `http://yourdomain.com`
   - Visit `https://yourdomain.com` (after SSL is active)
3. **Test all routes:**
   - `/` (Home)
   - `/about`
   - `/contact`

---

## Comparison

| Feature | Vercel | Netlify | Hostinger |
|---------|--------|---------|-----------|
| **Ease of Setup** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Auto Deploy** | ✅ Yes | ✅ Yes | ❌ Manual |
| **HTTPS/SSL** | ✅ Auto | ✅ Auto | ⚠️ Manual |
| **CDN** | ✅ Global | ✅ Global | ⚠️ Limited |
| **Free Tier** | ✅ Generous | ✅ Good | ❌ Paid |
| **React Router** | ✅ Auto | ✅ Auto | ⚠️ Needs .htaccess |
| **Custom Domain** | ✅ Easy | ✅ Easy | ⚠️ Complex |

## Recommendation

**For your React + Vite app, I recommend Vercel or Netlify** because:
- ✅ Zero configuration needed
- ✅ Automatic deployments
- ✅ Free SSL/HTTPS
- ✅ React Router works out of the box
- ✅ Better performance with global CDN
- ✅ Easier domain setup

**Use Hostinger only if:**
- You already have a hosting plan
- You need specific server-side features
- You prefer traditional hosting

---

## Troubleshooting

### If site shows "Index of" or directory listing:
- Make sure `index.html` is in the root
- Check file permissions (should be 644 for files, 755 for folders)

### If routes don't work (404 errors):
- **Vercel/Netlify**: Should work automatically
- **Hostinger**: Make sure `.htaccess` file is uploaded correctly
- Check that `mod_rewrite` is enabled on Hostinger

### If CSS/JS files don't load:
- Check that `assets/` folder was uploaded correctly
- Verify file paths in browser console
- Make sure base path in `vite.config.ts` is correct (should be `/`)

### If domain doesn't resolve:
- Check DNS propagation: https://www.whatsmydns.net/
- Verify nameservers/A records are correct
- Wait up to 48 hours for full propagation

## Additional Notes

- **Base URL:** Your Vite config should use `/` as base (default)
- **Environment Variables:** 
  - Vercel/Netlify: Set in dashboard under project settings
  - Hostinger: Use `.env` files or hosting panel
- **Build Command:** Always run `npm run build` before uploading new changes
- **Cache:** Clear browser cache if you see old version
