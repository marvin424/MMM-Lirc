#!/usr/bin/env python

import lirc, time, os
full_path = os.path.realpath(__file__)
sock = lirc.init("MMM-LIRC", os.path.dirname(full_path) + "/lircrc")
lirc.set_blocking(False, sock)

while True:
    code = lirc.nextcode()
    if code != []:
        print code[0]
    else:
        time.sleep(0.2)

