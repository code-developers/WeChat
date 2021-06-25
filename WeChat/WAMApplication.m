//
//  WAMApplication.m
//  WeChat
//
//  Created by Elangovan Ayyasamy on 25/06/21.
//  Copyright © 2021 Krisna Pranav. All rights reserved.
//

#import "WAMApplication.h"
#import "AppDelegate.h"

@implementation WAMApplication
- (void)sendEvent:(NSEvent *)theEvent {
    if (theEvent.type == NSLeftMouseUp) {
        if ([((AppDelegate*)self.delegate) shouldPropagateMouseUpEvent:theEvent]) {
            [super sendEvent:theEvent];
        }
        return;
    }
    
}


@end
