import { discordConfig } from 'Utils/discordConfig';

const discordSwitch = dataCenter => {
    const dc = dataCenter.toLowerCase();
    switch (dc) {
        case 'primal': {
            return discordConfig.primalURL;
        };
        case 'crystal': {
            return discordConfig.crystalURL;
        };
        case 'aether': {
            return discordConfig.aetherURL;
        };
        default: {
            return null;
        };
    };
};

export default discordSwitch;