#!/bin/bash

# Exit immediately if a command exits with a non-zero status
# Treat unset variables as an error and exit immediately
# Fail the script if any command in a pipeline fails
set -euo pipefail

# Define the URL of the ZIP file and the destination directory
URL="https://github.com/polarity-lang/polarity/releases/download/latest/web-demo-latest.zip"
DEST_DIR="static"

# Download the ZIP file using curl and save it to a temporary location
curl -L "$URL" -o /tmp/web-demo-latest.zip

# Extract the ZIP file to the destination directory
# Exclude index.html during extraction
unzip -o -d "$DEST_DIR" /tmp/web-demo-latest.zip -x "index.html"

# Clean up the downloaded ZIP file
rm /tmp/web-demo-latest.zip

echo "Extraction complete. Files are in the '$DEST_DIR' directory."

./scripts/index_examples.sh
