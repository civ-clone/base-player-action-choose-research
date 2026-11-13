# base-player-action-choose-research

The `ChooseResearch` `MandatoryPlayerAction`: offered while a player is researching nothing, and answered before the
turn can end, by choosing what to research next. Its value is the player's `PlayerResearch`.

A library: it registers no rules. A ruleset offers it from its own `Action` rule, through `base-science-research`'s
`chooseResearch(ChooseResearch, …)` (see `civ1-science`). `library-science/PlayerActions/ChooseResearch` re-exports
this class, so `instanceof` holds whichever path a client imports it from. Saves and clients name it by its class name,
`ChooseResearch`.
