#!/bin/bash
xvfb-run --auto-servernum --server-args="-screen 0 1280x960x24" -- npm test