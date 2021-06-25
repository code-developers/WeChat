//
//  WKWebView+Private.h
//  WeChat
//
//  Created by Elangovan Ayyasamy on 25/06/21.
//  Copyright © 2021 Krisna Pranav. All rights reserved.
//

#import <WebKit/WebKit.h>

@interface WKWebView (Private)
@property (copy, setter=_setCustomUserAgent:) NSString *_customUserAgent;
@end 
