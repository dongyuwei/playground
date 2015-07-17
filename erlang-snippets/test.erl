-module(test).
-export([fac/1]).

% see http://www.erlang.org/static/getting_started_quickly.html
fac(0) -> 1;
fac(N) -> N * fac(N-1).


% move cursor to beginning of the line
% io:format("\e[H").
%
% %% clear the console
% io:format("\e[J").
%
% %% both
% io:format("\e[H\e[J").
