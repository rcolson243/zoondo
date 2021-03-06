/* leny/zoondo
 *
 * /src/client/components/board/combat-face-up.js - Board Components: Combat face up card
 *
 * coded by leny
 * started at 14/04/2020
 */

import React, {useMemo} from "react";
import PropTypes from "prop-types";

import {px, rem, percent} from "@pwops/core";
import {usePwops} from "@pwops/react-hooks";
import {resolveCard, resolveType} from "data/utils";

import CardCorners from "components/tools/card-corners";

const BoardCombatCardFaceUp = ({
    className,
    tribe,
    type,
    slug,
    corners,
    selectedCornerIndex,
}) => {
    const styles = usePwops({
        container: {
            relative: true,
            size: [px(240)],
            flexColumn: ["space-around", "center"],
            border: [px(1), "solid", "#444"],
            borderRadius: px(20),
        },
        name: {
            display: "block",
            fontSize: rem(2.4),
        },
        image: {
            display: "block",
            size: [px(160)],
        },
        type: {
            display: "block",
            fontSize: rem(1.2),
        },
        corners: {absolute: true, size: percent(95)},
    });

    const card = useMemo(() => resolveCard({tribe, type, slug}), [
        tribe,
        type,
        slug,
    ]);

    const resolvedCorners = corners || card.corners;

    return (
        <div css={styles.container} className={className}>
            <strong css={styles.name}>{card.name}</strong>
            <CardCorners
                css={styles.corners}
                selectedCornerIndex={selectedCornerIndex}
                forCombat
                corners={resolvedCorners}
            />
            <img
                css={styles.image}
                src={`/assets/tribes/${tribe}/${card.slug}.png`}
                alt={card.name}
            />
            <span css={styles.type}>{resolveType(card.type)}</span>
        </div>
    );
};

BoardCombatCardFaceUp.propTypes = {
    tribe: PropTypes.string,
    type: PropTypes.string,
    slug: PropTypes.string,
    corners: PropTypes.arrayOf(PropTypes.number),
    selectedCornerIndex: PropTypes.number,
};

export default BoardCombatCardFaceUp;
