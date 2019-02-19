import React from 'react';
import MediaQuery from 'react-responsive';
import styles from './breakpoint.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

import dynamic from 'next/dynamic'

const MediaQueryNoSSR = dynamic(() => import('react-responsive'), {
  ssr: false
})


const breakpoints = {  
  desktop: '(min-width: ' + styles.desktopMin + ')',
  tablet: '(min-width: ' + styles.tabletMin +') and (max-width: ' + styles.tabletMax + ')',
  phone: '(max-width: ' + styles.phoneMax + ')',
  phone_portrait:'(max-width: ' + styles.phoneMax + ') and (orientation: portrait)',
  phone_landscape:'(max-width: ' + styles.phoneMax + ') and (orientation: landscape)',

  under:'(max-width: ' + styles.developerMax + ')',
  over:'(min-width: ' + styles.developer + ')',
 };

export default function Breakpoint(props) { 
 const breakpoint = breakpoints[props.name] || breakpoints.desktop;
return (
 <MediaQueryNoSSR {...props } query={breakpoint}>
 {props.children}
 </MediaQueryNoSSR>
 );
}

export function DesktopBreakpoint(props) {  
  return (  
  <Breakpoint name='desktop'>
  {props.children}
  </Breakpoint>
  );
 }

 export function TabletBreakpoint(props) {
  return (
  <Breakpoint name='tablet'>
  {props.children}
  </Breakpoint>
  );
 }

export function PhoneBreakpoint(props) {
 return (
 <Breakpoint name='phone'>
 {props.children}
 </Breakpoint>
 );
}

export function PhoneBreakpoint_Portrait(props) {
  return (
  <Breakpoint name='phone_portrait'>
  {props.children}
  </Breakpoint>
  );
 }

 export function PhoneBreakpoint_Landscape(props) {
  return (
  <Breakpoint name='phone_landscape'>
  {props.children}
  </Breakpoint>
  );
 }

 export function UnderScreen(props) {
  return (
  <Breakpoint name='under'>
  {props.children}
  </Breakpoint>
  );
 }

 
 export function OverScreen(props) {
  return (
  <Breakpoint name='over'>
  {props.children}
  </Breakpoint>
  );
 }