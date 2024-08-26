#!/bin/bash

# Exit immediately if a command exits with a non-zero status
# Treat unset variables as an error and exit immediately
# Fail the script if any command in a pipeline fails
set -euo pipefail

# Define the output file
output_file="static/examples/index.json"

# Start the JSON array
echo "[" > $output_file

# Find all files in static/examples, format them as JSON objects, excluding index.json
find static/examples -type f ! -name "index.json" | while read -r file; do
  # Get the path relative to the examples directory
  filepath="${file#static/examples/}"

  # Get the name by stripping .pol and replacing / with space
  name="${filepath%.pol}" # Remove the .pol extension
  name="${name//\// }"    # Replace / with space

  # Add a JSON object for this file
  echo "  {" >> $output_file
  echo "    \"name\": \"${name}\"," >> $output_file
  echo "    \"path\": \"${filepath}\"" >> $output_file
  echo "  }," >> $output_file
done

# Remove the last comma from the last JSON object to make it a valid JSON
truncate -s-2 $output_file

# End the JSON array
echo "" >> $output_file
echo "]" >> $output_file

echo "JSON index generated at $output_file"
