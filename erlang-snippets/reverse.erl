-module(reverse).
-export([rev/1]).

rev([]) -> [];
rev([X]) -> [X];
rev([A | [B | R]]) -> rev(R) ++ [B, A].
