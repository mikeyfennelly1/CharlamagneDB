#!/bin/bash

# Get the list of all commit hashes
# commit_hashes=$(git rev-list --all)

# Iterate through each commit hash
# for commit_hash in $commit_hashes; do
#     echo "Amending commit: $commit_hash"
    
#     # Perform git commit --amend
#     git commit --amend --no-edit --author="Mikey Fennelly <mikeyp.fennelly@gmail.com>" $commit_hash

# done

# echo "Amending commits completed."

git filter-branch --commit-filter '
        if [ "$GIT_AUTHOR_EMAIL" = "youremail@example.com" ];
        then
                GIT_AUTHOR_NAME="Mikey Fennelly";
                GIT_AUTHOR_EMAIL="mikeyp.fennelly@gmail.com";
                git commit-tree "$@";
        else
                git commit-tree "$@";
        fi' HEAD
