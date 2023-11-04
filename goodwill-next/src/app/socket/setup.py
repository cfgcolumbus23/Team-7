#!/bin/python

import os
import subprocess


cmds = ['npm i && npm run socket', 'npm i && npm run dev']
# cd to goodwill-next/src and run the above commands in parallel
# find cwd of this file and move up 2 directories
cwd = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
processes = [subprocess.Popen(cmd, shell=True, cwd=cwd) for cmd in cmds]
    
for process in processes:
    process.wait()
    
