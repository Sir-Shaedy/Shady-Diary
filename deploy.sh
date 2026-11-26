#!/bin/bash

# Deployment script for Netlify
# Run this script to build and deploy your blog

echo "🚀 Starting deployment process..."
echo ""

# Step 1: Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Step 2: Install dependencies (if needed)
echo "📦 Checking dependencies..."
npm install
echo "✅ Dependencies ready"
echo ""

# Step 3: Build the project
echo "🔨 Building the project..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please check for errors."
    exit 1
fi
echo "✅ Build successful!"
echo ""

# Step 4: Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
    echo "📥 Netlify CLI not found. Installing..."
    npm install -g netlify-cli
fi

# Step 5: Deploy
echo "🌐 Deploying to Netlify..."
echo ""
echo "Choose deployment option:"
echo "1. Deploy to production"
echo "2. Deploy draft (preview)"
read -p "Enter choice (1 or 2): " choice

if [ "$choice" == "1" ]; then
    netlify deploy --prod
    echo ""
    echo "✅ Deployed to production!"
    echo "🔗 Your site: https://shady-ways.netlify.app"
elif [ "$choice" == "2" ]; then
    netlify deploy
    echo ""
    echo "✅ Draft deployed! Check the preview URL above."
else
    echo "❌ Invalid choice"
    exit 1
fi

echo ""
echo "🎉 Deployment complete!"
echo ""
echo "Next steps:"
echo "1. Visit your site: https://shady-ways.netlify.app"
echo "2. Submit sitemap to Google: https://search.google.com/search-console"
echo "3. Share on social media!"
