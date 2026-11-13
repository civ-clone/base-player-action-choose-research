import AdvanceRegistry from '@civ-clone/core-science/AdvanceRegistry';
import ChooseResearch from '../ChooseResearch';
import MandatoryPlayerAction from '@civ-clone/core-player/MandatoryPlayerAction';
import Player from '@civ-clone/core-player/Player';
import PlayerAction from '@civ-clone/core-player/PlayerAction';
import PlayerResearch from '@civ-clone/core-science/PlayerResearch';
import RuleRegistry from '@civ-clone/core-rule/RuleRegistry';
import { expect } from 'chai';

describe('ChooseResearch', (): void => {
  it('is a mandatory player action, saved and matched by its class name', (): void => {
    const ruleRegistry = new RuleRegistry(),
      player = new Player(ruleRegistry),
      playerResearch = new PlayerResearch(
        player,
        new AdvanceRegistry(),
        ruleRegistry
      ),
      action = new ChooseResearch(player, playerResearch);

    expect(action).to.be.instanceOf(MandatoryPlayerAction);
    expect(action).to.be.instanceOf(PlayerAction);
    expect(action.value()).to.equal(playerResearch);
    expect(action.player()).to.equal(player);
    expect(ChooseResearch.name).to.equal('ChooseResearch');
  });
});
